const path = require('path');
const express = require('express');
const app = express();
const prisma = require('./prismaClient');
const cors = require("cors");
const bcrypt = require('bcryptjs');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const { version, validate } = require('uuid');

var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'sosiska';

var strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  var user = await prisma.user.findFirst({
    where: {
      id: {
        equals: jwt_payload.id
      }
    }
  })
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

const ACTIONS = require('./src/socket/actions');
const PORT = 3001;

function getClientRooms() {
  const { rooms } = io.sockets.adapter;

  return Array.from(rooms.keys()).filter(roomID => validate(roomID) && version(roomID) === 4);
}

function shareRoomsInfo() {
  io.emit(ACTIONS.SHARE_ROOMS, {
    rooms: getClientRooms()
  })
}

io.on('connection', socket => {

  shareRoomsInfo();
  console.log('connected', socket.id)
  socket.on(ACTIONS.JOIN, config => {
    const { room: roomID } = config;
    const { rooms: joinedRooms } = socket;

    console.log('user', socket.id, 'join', roomID)
    if (Array.from(joinedRooms).includes(roomID)) {
      return console.warn(`Already joined to ${roomID}`);
    }

    const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

    clients.forEach(clientID => {
      io.to(clientID).emit(ACTIONS.ADD_PEER, {
        peerID: socket.id,
        createOffer: false
      });

      socket.emit(ACTIONS.ADD_PEER, {
        peerID: clientID,
        createOffer: true,
      });
    });

    socket.join(roomID);
    shareRoomsInfo();
  });

  function leaveRoom() {
    const { rooms } = socket;

    Array.from(rooms)
      // LEAVE ONLY CLIENT CREATED ROOM
      .filter(roomID => validate(roomID) && version(roomID) === 4)
      .forEach(roomID => {

        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

        clients
          .forEach(clientID => {
            io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
              peerID: socket.id,
            });
            socket.emit(ACTIONS.REMOVE_PEER, {
              peerID: clientID,
            });
          });

        socket.leave(roomID);
      });

    console.log('disconnected', socket.id)
    shareRoomsInfo();
  }

  socket.on(ACTIONS.LEAVE, leaveRoom);
  socket.on('disconnecting', leaveRoom);

  socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => {
    io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
      peerID: socket.id,
      sessionDescription,
    });
  });

  socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => {
    io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
      peerID: socket.id,
      iceCandidate,
    });
  });

  socket.on(ACTIONS.SEND_MESSAGE, (data) => {
    socket.to(data.room).emit(ACTIONS.RECEIVE_MESSAGE, data);
  });
});

const publicPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));
app.use(cors());

app.get('*', (req, res) => {

  res.sendStatus(200);
});


app.post('/registration', async (req, res) => {
  const userdata = {
    email: req.query['email'],
    name: req.query['name'],
    password: req.query['password']
  }
  try {
    const user = await prisma.user.create({ data: userdata });
    return res.json(user)
  } catch (e) {
    console.log(e.message)
    return res.sendStatus(400)
  }
})

app.post("/login", async function (req, res) {
  if (req.query['name'] && req.query['password']) {
    var name = req.query['name'];
    var password = req.query['password'];
  }
  // usually this would be a database call:
  const user = await prisma.user.findFirst({
    where: {
      name: {
        equals: name
      }
    }
  });
  if (!user) {
    return res.status(401).json({ message: "no such user found" });

  }
  if (user.password === password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = { id: user.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    return res.json({ message: "ok", token: token });

  } else {
    return res.status(401).json({ message: "passwords did not match" });

  }
});

app.post('/profile', passport.authenticate('jwt', { session: false }), (req, res) => { res.status(200).send(req.user) });

server.listen(PORT, () => {
  console.log('Server Started!', PORT)
})
