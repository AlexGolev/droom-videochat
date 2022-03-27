import React from "react"
import classes from './Header.module.css'
import {
    NavLink,
    useNavigate,
} from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className={classes.header}>
            <NavLink to="/" className={classes.logo}>Droom</NavLink>
            <div className={classes.navButton}>
                <button onClick={() => navigate("/system")} className={classes.navBt}>ВОЙТИ</button>
                <button onClick={() => navigate("/createConference")} className={classes.navBt}>СОЗДАТЬ КОНФЕРЕНЦИЮ</button>
                <button onClick={() => navigate("/conference")} className={classes.navBt}>ВОЙТИ В КОНФЕРЕНЦИЮ</button>
            </div>
            <div className={classes.navButton} style={{ marginRight: "1.5%" }}>
                <button onClick={() => navigate("/register")} className={classes.navBt} style={{ background: "#06b06d" }}>РЕГИСТРАЦИЯ</button>
            </div>
        </div>
    );
}
