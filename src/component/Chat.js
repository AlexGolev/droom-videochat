import React, { useState, useEffect } from 'react';
import classes from './Chat.module.css'
import SpecialButton from '../button/SpecialButton.jsx'
import enterPNG from '../img/enter2.png'
import BaseInput from '../input/BaseInput';
import ACTIONS from '../socket/actions';
import ScrollToBottom from "react-scroll-to-bottom";

export default function Chat({ socket, username, room, visibility }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit(ACTIONS.SEND_MESSAGE, messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };
    useEffect(() => {
        socket.on(ACTIONS.RECEIVE_MESSAGE, (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    if (visibility == true) {
        return (
            // <div className={classes.chatContainer}>
            //     <div className={classes.screenText}>
            //         {messageList.map((messageContent) => {
            //             return (
            //                 <div
            //                     className="message"
            //                     id={username === messageContent.author ? "you" : "other"}
            //                 >
            //                     <div>
            //                         <div className="message-content">
            //                             <p>{messageContent.message}</p>
            //                         </div>
            //                         <div className="message-meta">
            //                             <p id="time">{messageContent.time}</p>
            //                             <p id="author">{messageContent.author}</p>
            //                         </div>
            //                     </div>
            //                 </div>
            //             );
            //         })}
            //     </div>
            //     <div className={classes.inputContainer}>
            //         <BaseInput />
            //         <div>
            //             <SpecialButton img={enterPNG} typ="enter" w="42px" h="42px" />
            //         </div>
            //         <input
            //             type="text"
            //             value={currentMessage}
            //             placeholder="Hey..."
            //             onChange={(event) => {
            //                 setCurrentMessage(event.target.value);
            //             }}
            //             onKeyPress={(event) => {
            //                 event.key === "Enter" && sendMessage();
            //             }}
            //         />
            //         <button onClick={sendMessage}>&#9658;</button>
            //     </div>
            // </div>
            <div className={classes.chat_window}>
                <div className={classes.chat_body}>
                    <ScrollToBottom className={classes.message_container}>
                        {messageList.map((messageContent) => {
                            return (
                                <div
                                    className={classes.message}
                                    id={username === messageContent.author ? "you" : "other"}
                                >
                                    <div>
                                        <div className={classes.message_content}>
                                            <p>{messageContent.message}</p>
                                        </div>
                                        <div className={classes.message_meta}>
                                            <p id="time">{messageContent.time}</p>
                                            <p id="author">{messageContent.author}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ScrollToBottom>
                </div>
                <div className={classes.chat_footer}>
                    <input 
                        className={classes.myInput}
                        type="text"
                        value={currentMessage}
                        placeholder="Hey..."
                        onChange={(event) => {
                            setCurrentMessage(event.target.value);
                        }}
                        onKeyPress={(event) => {
                            event.key === "Enter" && sendMessage();
                        }}
                    />
                    <button onClick={sendMessage}>&#9658;</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
            </div>
        );
    }
}

