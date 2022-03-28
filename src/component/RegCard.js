import React, { useState } from 'react';
import BaseButton from '../button/BaseButton';
import BaseInput from '../input/BaseInput';
import classes from './RegCard.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegCard() {
    const [register, setRegister] = useState(() => {
        return {
            name: "",
            password: "",
        }
    });
    const navigate = useNavigate();
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    };

    function submitChackin() {
        axios.post(`http://localhost:3001/registration?name=${register.name}&password=${register.password}`).then(() => { navigate("/system") }).catch((e) => {
            alert(e.message)
        })
    };
    return (
        <div className={classes.form}>
            <h2 className={classes.title}>
                SIGN IN TO DROOM
            </h2>
            <p>
                Присоединяйтесь к нам бесплатно! Будьте ближе друг к другу вместе с Droom.
            </p>
            <div className={classes.userdata}>
                <input placeholder='Username' className={classes.myInput} type="name" id="name" name="name" value={register.name} onChange={changeInputRegister} />
                <input placeholder='Password' className={classes.myInput} type="password" id="password" name="password" value={register.password} onChange={changeInputRegister} />
                <BaseButton f={submitChackin} goTo='/system' type='reg' text="LOG IN" />
            </div>
        </div>
    );
}

