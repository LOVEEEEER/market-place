import React, { useEffect, useState } from "react";
import api from "../api";
import "../css/Product.css";
import PropTypes from "prop-types";
import { Rating, Typography } from "@mui/material";
import LoadingProductPage from "./LoadingProductPage";
const Product = ({ productId }) => {
  const [item, setItem] = useState();
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
  const handleDescription = (itemId) => {
    const descriptionIndex = descriptions.findIndex(
      (item) => item.id === itemId
    );
    const copyOfDescriptions = [...descriptions];
    copyOfDescriptions[descriptionIndex].open =
      !copyOfDescriptions[descriptionIndex].open;
    setDescriptions(copyOfDescriptions);
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
                <button className="product__product-buy_button">
                  В корзину
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

Product.propTypes = {
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Product;
