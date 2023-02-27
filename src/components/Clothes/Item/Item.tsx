import React from 'react';

import s from './Item.module.scss'

const Item: React.FC = () => {
    return (
        <div className={s.item}>
            <img src="https://mykaleidoscope.ru/uploads/posts/2021-11/1636187353_133-mykaleidoscope-ru-p-eko-sumka-devushka-krasivo-foto-145.jpg" alt=""/>
            <div className={s["item-wrap"]}>
                <span className={s.item__desc}>
                    <h3>Сумка</h3>
                    <p>Ахуенная сумочка, еще и из натуральной кожи ребенка</p>
                    <div>Цена: 99 $</div>
                </span>
                <button>+</button>
            </div>
        </div>
    );
};

export default Item;