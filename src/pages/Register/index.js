import React from 'react';
import BaseButton from '../../button/BaseButton.jsx'
import BaseInput from '../../input/BaseInput.jsx'
import classes from './Register.module.css'
import { NavLink } from 'react-router-dom';

export default function Register() {
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
                        <BaseButton link="#" text="LOG IN" />
                    </div>
                </div>
            </div>
        </div>
    );
}
