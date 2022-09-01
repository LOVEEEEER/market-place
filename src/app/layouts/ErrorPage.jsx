import React from "react";
import Header from "../components/common/Header/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <h1 className="error-message">Страница не найдена :(</h1>
    </>
  );
};

export default ErrorPage;
