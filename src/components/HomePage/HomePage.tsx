import React from 'react';
import s from './HomePage.module.scss'
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <section className={s.homepage}>
            <h1>Рзаделы CLOTH & ACCS.</h1>
            <div className={s.homepage__cards}>
                <Link to="/clothes" className={s.homepage__cards__item}>
                    <img src="https://emkafashion.ru/upload/resize_cache/uf/526/5vpzgl2aigzs6goodzk8qhfohy3mk01v/800_800_0/1-small.jpg" alt=""/>
                    <label htmlFor="img">Одежда</label>
                </Link>
                <Link to="/accessories" className={s.homepage__cards__item}>
                    <img src="https://mykaleidoscope.ru/uploads/posts/2021-11/1636187353_133-mykaleidoscope-ru-p-eko-sumka-devushka-krasivo-foto-145.jpg" alt=""/>
                    <label htmlFor="img">Аксессуары</label>
                </Link>
            </div>
            <div className={s.homepage__about}>
                <h1> О Нас </h1>
                <p>"Мы делаем продаем качественную одежду и аксессуары лучших брендов. Все товары мы заказываем на прямую у производителя. Мы ручаемся за качество и подлинность каждого товара"</p>
            </div>
        </section>
    );
};

export default HomePage;