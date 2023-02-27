import React from 'react';
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <nav className={s.header}>
            <div className={s.header__wrap}>
                <h1>CLOTH <span>&</span> ACCS.</h1>
                <ul>
                    <li><NavLink to="/clothes">Uk</NavLink></li>
                    <li><NavLink to="/clothes">Одежда</NavLink></li>
                    <li><NavLink to="/accessories">Аксессуары</NavLink></li>
                </ul>
                <div className={s["header-cart"]}>
                    <img className={s["header-cart__img"]} src="src/assets/cart.svg" alt=""/>
                    <span>Корзина: 0</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;