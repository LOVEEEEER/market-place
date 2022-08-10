import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ProductCardsList = ({ items }) => {
  console.log(items);
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
            <Link to={"/products/" + item.id}>
              <div className="card-show">
                <i className="bi bi-eye"></i>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

ProductCardsList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default ProductCardsList;
