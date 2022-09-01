import React, { useEffect, useState } from "react";
import api from "../../../api";
import "./Product.css";
import PropTypes from "prop-types";
import { Rating, Typography } from "@mui/material";
import LoadingProductPage from "./LoadingProductPage";
import { fromStorage } from "../../../utils/fromStorage";
import { toStorage } from "../../../utils/toStorage";

const ProductPage = ({ productId, ...rest }) => {
  const [item, setItem] = useState();
  const [basket, setBasket] = useState();
  const [descriptions, setDescriptions] = useState([
    { name: "Описание", id: 1, open: false }
  ]);
  useEffect(() => {
    api.clothes.getItem(productId).then((data) => {
      setItem(data);
      setDescriptions((prevState) =>
        prevState.map((item) => {
          return { ...item, description: data.description };
        })
      );
    });
  }, []);
  useEffect(() => {
    const clothes = fromStorage("clothes");
    const product = clothes.findIndex(
      (item) => item.id.toString() === productId
    );
    setBasket(clothes[product].inBasket);
  }, []);
  const handleDescription = (itemId) => {
    const descriptionIndex = descriptions.findIndex(
      (item) => item.id === itemId
    );
    const copyOfDescriptions = [...descriptions];
    copyOfDescriptions[descriptionIndex].open =
      !copyOfDescriptions[descriptionIndex].open;
    setDescriptions(copyOfDescriptions);
  };
  const handleBasket = () => {
    const clothes = fromStorage("clothes");
    const product = clothes.findIndex(
      (item) => item.id.toString() === productId
    );
    clothes[product].inBasket = !clothes[product].inBasket;
    toStorage("clothes", clothes);
    setBasket((prevState) => !prevState);
  };
  if (item) {
    return (
      <>
        <section className="product">
          <div className="container product__container">
            <img src={item.image} alt="" className="product__main-image" />
            <div className="product__description">
              <h2 className="product__product-title">{item.title}</h2>
              <h1 className="product__product-price">{item.price} $</h1>
              <div className="product__buttons-list">
                <button
                  className={
                    "product__product-buy_button " + (basket ? "active" : "")
                  }
                  onClick={handleBasket}
                >
                  {basket ? "Удалить из корзины" : "Добавить в корзину"}
                </button>
                <button className="product__product-like_button">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
              <Typography component="legend">Rating</Typography>
              <Rating
                name="simple-controlled"
                value={item.rating.rate}
                readOnly={true}
              />
              <ul className="product__descriptions-list">
                {descriptions.map((item) => (
                  <li
                    className={
                      "product__descriptions-item" +
                      (item.open ? " active" : "")
                    }
                    key={item.id}
                    onClick={() => handleDescription(item.id)}
                  >
                    <span className="product__descriptions-name">
                      {item.name}
                    </span>
                    {item.open ? (
                      <i className="bi bi-arrow-up-short"></i>
                    ) : (
                      <i className="bi bi-arrow-down-short"></i>
                    )}
                    <div
                      className={
                        "product__show-description_block" +
                        (item.open ? " active" : "")
                      }
                    >
                      <p className="product__show-description">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
  return <LoadingProductPage />;
};

ProductPage.propTypes = {
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ProductPage;
