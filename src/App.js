import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Room from './pages/Room';
import Main from './pages/Main';
import Home from './pages/Home';
// import Home from '../pages/Home.js'
// import Register from '../pages/Register.js'
import Conference from './pages/Conference'
import CreateConference from './pages/CreateConference'
// import System from '../pages/System.js'
// import ConferenceRoom from '../pages/ConferenceRoom.js'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<Room/>} />
        <Route path='/createConference' element={<CreateConference />} />
        <Route path='/conference' element={<Conference />} />
        {/* <Route exact path='/' component={Main}/> */}
        {/* <Route path='/register' element={<Register />} />
        
        
        <Route path='/system' element={<System />} />
        <Route path='/conferenceRoom/:id' element={<ConferenceRoom />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
