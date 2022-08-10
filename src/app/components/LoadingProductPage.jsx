import React from "react";
import { Skeleton, Rating, Typography } from "@mui/material";
const LoadingProductPage = () => {
  return (
    <>
      <section className="product">
        <div className="container product__container">
          <Skeleton>
            <img
              src="https://www.peoples.ru/images/interesting/interesting_201405140727231.jpg"
              alt=""
              className="product__main-image"
            />
          </Skeleton>
          <div className="product__description">
            <Skeleton>
              <h2 className="product__product-title">lorem lorem</h2>
            </Skeleton>
            <Skeleton>
              <h1 className="product__product-price">lorem $</h1>
            </Skeleton>
            <div className="product__buttons-list">
              <Skeleton>
                <button className="product__product-buy_button">
                  В корзину
                </button>
              </Skeleton>
              <Skeleton>
                <button className="product__product-like_button">
                  <i className="bi bi-heart"></i>
                </button>
              </Skeleton>
            </div>
            <Skeleton>
              <Typography component="legend">Rating</Typography>
            </Skeleton>
            <Skeleton>
              <Rating name="simple-controlled" readOnly={true} />
            </Skeleton>
            <Skeleton>
              <span className="product__descriptions-name">lorem lorem</span>
            </Skeleton>
            <Skeleton>
              <i className="bi bi-arrow-up-short"></i>
            </Skeleton>

            <Skeleton>
              <div className="product__show-description_block">
                <p className="product__show-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  repellendus ipsum laborum molestiae quia, recusandae labore
                  nemo enim similique provident obcaecati facilis architecto
                  accusamus. Numquam, facilis possimus! Repudiandae, ad
                  corporis.
                </p>
              </div>
            </Skeleton>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadingProductPage;
