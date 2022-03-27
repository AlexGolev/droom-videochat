import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './RegCard.module.css'

export default function RegCard() {
    const navigate = useNavigate();
    return (
        <div className={classes.form}>
            <h2 className={classes.title}>
                SIGN IN TO DROOM
            </h2>
            <p>
                Присоединяйтесь к нам бесплатно! Будьте ближе друг к другу вместе с Droom.
            </p>
            <div className={classes.userdata}>
                <input className={classes.myInput} placeholder="Username" />
                <input className={classes.myInput} placeholder="Password" />
                <button onClick={() => navigate("#")} className={classes.myButton}>LOG IN</button>
            </div>
        </div>
    );
}

