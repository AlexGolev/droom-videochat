import React from "react"
import classes from './Header.module.css'
import NavButton from "../button/NavButton";
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
                <NavButton goTo="/system" text="ВОЙТИ" />
                <NavButton goTo="/createConference" text="СОЗДАТЬ КОНФЕРЕНЦИЮ" />
                <NavButton goTo="/conference" text="ВОЙТИ В КОНФЕРЕНЦИЮ" />
            </div>
            <div className={classes.navButton} style={{ marginRight: "1.5%" }}>
                {localStorage.token ?
                    <NavButton goto="#" text={localStorage.name} color="#06b06d" />
                    :
                    <NavButton goTo="/register" text="РЕГИСТРАЦИЯ" color="#06b06d" />
                }
            </div>
        </div>
    );
}
