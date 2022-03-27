import React from 'react';
import BaseInput from '../../input/BaseInput';
import BaseButton from '../../button/BaseButton';
import classes from './System.module.css'
import { NavLink } from 'react-router-dom';

export default function System () {
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
                                <BaseInput text="Email" />
                            </div>
                            <div className={classes.myBox2}>
                                <p>
                                    Password
                                </p>
                                <BaseInput text="Password" />
                            </div>
                            <BaseButton link="#" text="LOG IN"/>
                        </div>
                    </div>
                </div>
            </div>
        );
}
