import React, { Component } from 'react';
import classes from './ComentBox.module.css'

class ComentBox extends Component {
    render() {
        return (
            <div className={classes.comentContainer}>
                <div className={classes.comentItem1}>
                    <a id="userName"/>
                    <a id="starts"/>
                </div>
                <div className={classes.comentItem2}>
                    <a id="comentText"/>
                </div>
            </div>
        );
    }
}

export default ComentBox;
