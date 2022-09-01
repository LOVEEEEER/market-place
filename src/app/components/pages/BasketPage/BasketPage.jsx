import React, { useState, useEffect } from "react";
import api from "../../../api";
import "./BasketPage.css";
import { toStorage } from "../../../utils/toStorage";
import LoadingBasket from "../../ui/LoadingBasket/LoadingBasket";
import { Link } from "react-router-dom";

const BasketPage = () => {
  const [clothes, setClothes] = useState();
  const [basketClothes, setBasketClothes] = useState();
  useEffect(() => {
    api.clothes.fetchAll().then((data) => {
      setClothes(data);
      setBasketClothes(data.filter((item) => item.inBasket));
    });
  }, []);
  const handleDelete = (id) => {
    setBasketClothes((prevState) =>
      prevState.filter((item) => item.id.toString() !== id.toString())
    );
    const clothesCopy = clothes.map((item) => {
      if (item.id === id) {
        item.inBasket = false;
      }
      return item;
    });
    setClothes(clothesCopy);
    toStorage("clothes", clothes);
  };
  if (!basketClothes) {
    return <LoadingBasket />;
  }
  return (
    <>
      {basketClothes && basketClothes.length ? (
        <section className="basket">
          <div className="container basket__container">
            <ul className="basket__list">
              {basketClothes.map((item) => (
                <li className="basket__item" key={item.id}>
                  <div className="first-info">
                    <img src={item.image} alt="" className="item-image" />
                    <Link to={`/products/${item.id}`}>{item.title}</Link>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <h1 className="empty-basket">Корзина пуста :(</h1>
      )}
    </>
  );
};

export default BasketPage;
