import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './CreateConference.module.css'
import socket from '../../socket/index.js'
import ACTIONS from '../../socket/actions.js'
import { useState, useEffect } from 'react'
import {v4} from 'uuid'
import BaseButton from '../../button/BaseButton'

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
                    <BaseButton goTo={"/room/" + v4()} text="Создать" w="100%" color="#06b06d" type="conductor"/>
                </div>
            </div>
        </div>
    );

}
