import React from 'react';
import classes from "./BaseInput.module.css"

export default function BaseInput(props) {
    return (
        <input className={classes.myInput} placeholder={props.text} />
    );
}
