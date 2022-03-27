import React, { Component } from 'react';
import classes from './Chat.module.css'
import SpecialButton from '../button/SpecialButton.jsx'
import enterPNG from '../img/enter2.png'

class Chat extends Component {

    render() {
        if(this.props.visibility==true){
            return (
                <div className={classes.chatContainer}>
                    <div className={classes.screenText}>
                    </div>
                    <div className={classes.inputContainer}>
                    <input className={classes.myInput}  />
                        <div>
                            <SpecialButton img={enterPNG} typ="enter" w="42px" h="42px"/>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div>
                </div>
            );
        }
    }
}

export default Chat;
