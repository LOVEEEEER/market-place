import React from "react";
import _ from "lodash";
import Skeleton from "@mui/material/Skeleton";
import "./LoadingBasket.css";
import "../../pages/BasketPage/BasketPage.css";

const LoadingBasket = () => {
  const items = _.range(0, 16);
  return (
    <section className="basket">
      <div className="container basket__container">
        <ul className="basket__list">
          {items.map((item) => (
            <Skeleton key={item} className="basket-loading">
              <li className="basket__item">
                <div className="first-info">
                  <img src="123" alt="" className="item-image" />
                  <p>123</p>
                </div>
                <button className="delete-button">Удалить</button>
              </li>
            </Skeleton>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LoadingBasket;
