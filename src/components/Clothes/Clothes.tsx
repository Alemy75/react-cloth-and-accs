import React from 'react';
import s from './Clothes.module.scss'
import {Link} from "react-router-dom";
import Item from "./Item/Item";
const Clothes: React.FC = () => {
    return (
        <div className={s.clothes}>
            <h1>Аксессуары</h1>
            <ul className={s.category}>
                <li><Link to="/">Брюки</Link></li>
                <li><Link to="/">Свитера</Link></li>
                <li><Link to="/">Верхняя одежда</Link></li>
            </ul>
            <div className={s.items}>
                <Link to="/accessories/1"><Item/></Link>
                <Link to="/accessories/1"><Item/></Link>
                <Link to="/accessories/1"><Item/></Link>
                <Link to="/accessories/1"><Item/></Link>
            </div>
        </div>
    );
};

export default Clothes;