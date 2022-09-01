import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
const ProductCardsList = ({ items, sex }) => {
  const history = useHistory();
  const handleToggleProductPage = (itemId) => {
    history.push(`/products/${itemId}`);
  };
  return (
    <>
      {items.map((item) => (
        <div className="card" key={"id" + item.title}>
          <img className="card-image" src={item.image} alt="" />
          <div className="card-content-wrapper">
            <div className="card-text-wrapper">
              <a href="#" className="card-title">
                {item.title}
              </a>
              <a href="" className="card-price">
                {item.price} $
              </a>
            </div>
            <i
              onClick={() => handleToggleProductPage(item.id)}
              className="bi bi-eye card-show"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
};

ProductCardsList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  sex: PropTypes.string.isRequired
};

export default ProductCardsList;
