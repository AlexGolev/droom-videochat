import React, { Component } from 'react';
import classes from './SpecialButton.module.css';




function Click(typ,viewChat,visibility){
    switch(typ){
        case 'chat':
            viewChat(visibility);
        break;
        case 'leav':
            window.location.assign('http://localhost:3000/conference');
        break;
    }
}

class SpecialButton extends Component {
    state = {
        visibility: true
    };

    render() {
        return (
            <button onClick={() => Click(this.props.typ,this.props.viewChat,this.state.visibility)} className={classes.myButton} style={{background: this.props.color, backgroundImage: `url(${this.props.img})`, width: this.props.w, height: this.props.h}}>
                {this.props.text}
            </button>
        );
    }
}

export default SpecialButton;
