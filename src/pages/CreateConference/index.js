import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './CreateConference.module.css'
import socket from '../../socket/index.js'
import ACTIONS from '../../socket/actions.js'
import { useState, useEffect } from 'react'
import {v4} from 'uuid'

export default function Conference() {
    const navigate = useNavigate();
    const [rooms, updateRooms] = useState([]);

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
            updateRooms(rooms);
        });
    }, []);


    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <h1>
                    Создать конференцию
                </h1>
                <div className={classes.boxItem}>
                    <button onClick={() => navigate("/room/" + v4()) } className={classes.myButton} style={{ background: "#06b06d", width: "100%" }}>Создать</button>
                </div>
            </div>
        </div>
    );

}
