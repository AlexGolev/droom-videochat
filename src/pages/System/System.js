import React, { Component } from 'react';
import MyButton from '../button/MyButton.jsx'
import MyInput from '../input/MyInput.jsx'
import classes from './System.module.css'
import { NavLink } from 'react-router-dom';

class System extends Component {
    render() {
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
                                    Email
                                </p>
                                <MyInput text="Email" />
                            </div>
                            <div className={classes.myBox2}>
                                <p>
                                    Password
                                </p>
                                <MyInput text="Password" />
                            </div>
                            <MyButton link="#" text="LOG IN"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default System;
