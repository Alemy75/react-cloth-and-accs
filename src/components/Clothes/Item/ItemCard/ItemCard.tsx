import React from "react";
import s from "./ItemCard.module.scss";

const ItemCard: React.FC = () => {
  return (
    <div className={s["item-card"]}>
      <h1>Название</h1>
      <div className={s["item-card__wrap"]}>
        <div className={s.left}>
          <img
            src="https://mykaleidoscope.ru/uploads/posts/2021-11/1636187353_133-mykaleidoscope-ru-p-eko-sumka-devushka-krasivo-foto-145.jpg"
            alt=""
          />
        </div>
        <div className={s.right}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            ad qui enim doloremque. Dolores sunt fugiat esse explicabo quo ab
            obcaecati quibusdam velit deserunt eveniet, tempora a illo porro
            placeat!
          </p>
          <h4>Цена: 99.9 $</h4>
          <span>
            <button>Добавить в корзину</button>
            <div>
              <span>
                <div>Количество: 0</div>
                <button className={s["btn-count"]}>+</button>
                <button className={s["btn-count"]}>-</button>
              </span>
            </div>
          </span>
          <div className={s.img__wrap}>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <div className={s.description}>
        <h3>Характеристики:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro
          repellat aut dolorem mollitia quis non, nisi sunt, repellendus vitae
          earum maxime nesciunt, aliquid incidunt quisquam velit illum debitis
          animi pariatur! Aspernatur corrupti fugit laboriosam incidunt magni
          illo, voluptatem ipsum deleniti expedita veritatis voluptas saepe
          voluptates suscipit obcaecati fugiat at possimus itaque! In,
          assumenda. Tempora, officiis! Quam, totam illo blanditiis dignissimos
          sit eos inventore nostrum id vel? Repellendus autem accusantium
          molestias quidem dignissimos iste atque perspiciatis obcaecati
          necessitatibus excepturi exercitationem praesentium architecto, rem
          recusandae earum magni cum dolor voluptatem ipsum odio doloremque
          accusamus fugit harum! Et quisquam tempore cumque cupiditate iure
          iusto vero eveniet delectus, quidem laboriosam iste itaque quod aut at
          accusamus ex non modi officiis explicabo repellendus deserunt
          consequuntur ab! Debitis neque nemo quae voluptatem aliquam iste rem,
          incidunt fugiat eum sunt culpa repellat, ut aperiam! Aspernatur, esse
          ex exercitationem explicabo debitis eaque consequatur quod, reiciendis
          eligendi pariatur omnis aliquam laudantium reprehenderit libero illo
          sed tenetur! Doloribus vel dolor distinctio culpa amet, architecto
          numquam animi, odit corporis ipsum mollitia, accusantium sequi quis in
          accusamus ex ducimus cupiditate sapiente. Commodi, at suscipit fuga
          explicabo quam qui impedit nisi cum id voluptas, vel numquam harum
          obcaecati ex tenetur laborum. Corrupti!
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
