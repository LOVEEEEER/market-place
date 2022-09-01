import React from "react";
import Button from "@mui/material/Button";
import "./MainPage.css";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();
  const handleRedictShop = () => {
    history.push("/products");
  };
  return (
    <>
      <main className="main__page">
        <div className="container main__container">
          <div className="main__advertising-block">
            <p className="main__advertising-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aspernatur repellat delectus alias est, eligendi quo veritatis
              aliquid nostrum autem ab assumenda similique ducimus aliquam eius,
              a, consequatur quae. Accusantium?
            </p>
            <Button
              color="success"
              variant="contained"
              onClick={handleRedictShop}
            >
              Перейти к товарам
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
