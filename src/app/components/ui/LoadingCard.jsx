import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";
const LoadingCard = ({ items }) => {
  const array = _.range(1, items);
  return (
    <>
      {array.map((item) => (
        <div className="card" key={item}>
          <Skeleton sx={{ bgcolor: "rgb(224, 224, 255)" }}>
            <img
              className="card-image"
              src="https://www.peoples.ru/images/interesting/interesting_201405140727231.jpg"
            />
          </Skeleton>
          <div className="card-content-wrapper">
            <div className="card-text-wrapper">
              <Skeleton sx={{ bgcolor: "rgb(224, 224, 255)" }}>
                <a href="#" className="card-title"></a>
              </Skeleton>
              <Skeleton sx={{ bgcolor: "rgb(224, 224, 255)" }}>
                <a href="" className="card-price">
                  Lorem
                </a>
              </Skeleton>
            </div>
            <Skeleton sx={{ bgcolor: "rgb(224, 224, 255)" }}>
              <div className="card-show">
                <i className="bi bi-eye"></i>
              </div>
            </Skeleton>
          </div>
        </div>
      ))}
    </>
  );
};

LoadingCard.propTypes = {
  items: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default LoadingCard;
