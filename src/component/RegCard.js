import React from 'react';
import BaseButton from '../button/BaseButton';
import BaseInput from '../input/BaseInput';
import classes from './RegCard.module.css'

export default function RegCard() {
    return (
        <div className={classes.form}>
            <h2 className={classes.title}>
                SIGN IN TO DROOM
            </h2>
            <p>
                Присоединяйтесь к нам бесплатно! Будьте ближе друг к другу вместе с Droom.
            </p>
            <div className={classes.userdata}>
                <BaseInput text="Username"/>
                <BaseInput text="Password"/>
                <BaseButton goTo="#" text="LOG IN"/>
            </div>
        </div>
    );
}

