import React, {useState} from 'react';
import BaseInput from '../../input/BaseInput';
import BaseButton from '../../button/BaseButton';
import classes from './System.module.css'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function System() {
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
        axios.post(`http://localhost:3001/login?name=${register.name}&password=${register.password}`)
            .then((resp) => {
                console.log("getted",resp.data.message, resp.status, register.name) 
                if (resp.status == 200) {
                    localStorage.setItem('token', resp.data.token);
                    localStorage.setItem('name', register.name);
                    console.log(localStorage.token)
                    alert("Вы успешно вошли")
                    navigate("#")
                }
            }).catch((e) => {
                alert(e.message)
            });
    };
    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.boxItem}>
                    <h1>
                        ВОЙТИ В СИСТЕМУ
                    </h1>
                    <h2>
                        С возвращением !
                    </h2>
                    <div>
                        <p>
                            Впервые пользуетесь Groom?
                        </p>
                        <NavLink to="/register" className={classes.link}>
                            Бесплатная регистрация
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
                        <BaseButton f={submitChackin} goTo='/' type='reg' text="LOG IN" />
                    </div>
                </div>
            </div>
        </div>
    );
}
