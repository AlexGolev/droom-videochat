import React, { Component } from 'react'
import classes from './MyButton.module.css'
import { NavLink } from 'react-router-dom'
import {v4} from 'uuid'

class MyButton extends Component {
    render() {
        return (
            <button onClick={() =>{window.location.assign(this.props.goTo + v4())}} className={classes.myButton} style={{background: this.props.color, width: this.props.w}}>
                {this.props.text}
            </button>
        );
    }
}

export default MyButton;
