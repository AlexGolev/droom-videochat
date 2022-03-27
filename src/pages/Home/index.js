import React, { Component } from 'react'
import RegCard from '../../component/RegCard.js'
import SpecialButton from '../../button/SpecialButton.jsx'
import classes from './Home.module.css'
import im from '../../img/jojo.png'
import '../Video.css'
//import VideoPlayer from 'react-video-js-player'

export default function Home() {
        return (
            <div>
                <div className={classes.firstBox}>
                    <div className={classes.firstBoxItem1}>
                        <div className={classes.textBoxTitle}>
                            <h2 className={classes.title}>
                            DROOM
                            </h2>
                            <p>
                            Поддерживайте связь для работы или общения с близкими вместе с Droom. Общайтесь где угодно, чаты и видео конференции бесплатны, без ограничений.
                            </p>
                        </div>
                    </div>
                    <div className={classes.firstBoxItem1}>
                        <div className={classes.regContainer}>
                            <RegCard/>
                        </div>
                        
                    </div>
                </div>
                <div className={classes.secondBox}>
                    <div className={classes.firstBoxItem1}>
                        <div className={classes.imgContainer}>
                            <img src={im}/>
                        </div>
                    </div>
                    <div className={classes.firstBoxItem1}>
                        <div className={classes.textBox1}>
                            <h2 className={classes.title}>
                            БУДЬТЕ ВСЕГДА НА СВЯЗИ
                            </h2>
                            <p>
                            Используйте удобную для вас платформу. Launcher Droom теперь на вашем компьютере!
                            </p>
                        </div>
                        <div className={classes.buttonContainer}>
                            <SpecialButton text="DOWNLOAD" typ="download"/>
                        </div>
                    </div>
                </div>

            </div>
        );
}
