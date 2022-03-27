import React from 'react'
import classes from './BaseButton.module.css'
import { useNavigate } from 'react-router-dom';

export default function BaseButton(props) {
    const navigate = useNavigate();
    return (
        <button onClick={() => { navigate(props.goTo) }} className={classes.myButton} style={{ background: props.color, width: props.w, marginLeft: props.marginLeft }}>
            {props.text}
        </button>
    );
}
