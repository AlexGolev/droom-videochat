import React, { useState ,useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './Conference.module.css'
import socket from '../../socket';
import ACTIONS from '../../socket/actions';
import {v4} from 'uuid';

export default function Conference() {
    const navigate = useNavigate();
    //const [roomId, setId] = useState("");

    const [rooms, updateRooms] = useState([]);
    const rootNode = useRef();

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
            if (rootNode.current) {
                updateRooms(rooms);
            }
        });
    }, []);


    function handleIdChange(event) {
        setId(event.target.value);
    }

    return (
        <div className={classes.container}>
            {/* <div className={classes.box}>
                <h1>
                    Войти в конференцию
                </h1>
                <div className={classes.boxItem}>
                    <input className={classes.myInput} onChange={handleIdChange} placeholder="Укажите идентификатор" />
                    <div>
                        <button onClick={() => navigate("/room/")} className={classes.myButton} style={{ background: "#06b06d" }}>ПРИСОЕДИНИТЬСЯ</button>
                    </div>
                </div>
            </div> */}
            <div ref={rootNode} className={classes.box}>
                <h1>Публичные комнаты</h1>

                <ul>
                    {rooms.map(roomID => (
                        <li key={roomID} style={{color: "#fff", margin: "5%"}}>
                            {roomID}
                            <button className={classes.myButton} style={{ background: "#06b06d", marginLeft: "5%" }} onClick={() => {
                                navigate(`/room/${roomID}`);
                            }}>ВОЙТИ</button>
                        </li>
                    ))}
                </ul>

                {/* <button className={classes.myButton} style={{ background: "#06b06d" }} onClick={() => {
                    navigate(`/room/${v4()}`);
                }}>Create New Room</button> */}
            </div>
        </div>

    );

}
