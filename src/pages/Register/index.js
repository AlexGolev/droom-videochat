import React, { useState } from 'react';
import BaseButton from '../../button/BaseButton.jsx'
import BaseInput from '../../input/BaseInput.jsx'
import classes from './Register.module.css'
import { Navigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [register, setRegister] = useState(() => {
        return {
            name: "",
            password: "",
        }
    });

    const navigate = useNavigate()
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
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.boxItem}>
                    <h1>
                        РЕГИСТРАЦИЯ
                    </h1>
                    <h2>
                        Бесплатные конференции и чаты
                    </h2>
                    <div>
                        <p>
                            Уже есть учётная запись?
                        </p>
                        <NavLink to="/system" className={classes.link}>
                            Войти в систему
                        </NavLink>
                    </div>
                </div>
                <div className={classes.boxItem2}>
                    <div className={classes.myBox1}>
                        <div className={classes.myBox2}>
                            <p>
                                Username
                            </p>
                            <input placeholder='Username' className={classes.myInput} type="name" id="name" name="name" value={register.name} onChange={changeInputRegister} />
                        </div>
                        <div className={classes.myBox2}>
                            <p>
                                Password
                            </p>
                            <input placeholder='Password' className={classes.myInput} type="password" id="password" name="password" value={register.password} onChange={changeInputRegister} />
                        </div>
                        <BaseButton type="reg" f={submitChackin} goTo='/system' text="LOG IN" />
                    </div>
                </div>
            </div>
        </div>
    );
}
