import React, { useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import { Route, useParams } from "react-router-dom";
import Product from "../components/Product";
const ProductsPage = ({ ...rest }) => {
  const [value, setValue] = useState("");
  const params = useParams();
  const productId = params.id;
  const handleChange = (value) => {
    setValue(value);
  };
  if (productId) {
    return (
      <>
        <Header onChange={handleChange} value={value} {...rest} />
        <Route
          path={"/products/" + productId}
          component={() => (
            <Product productId={productId} value={value} {...rest} />
          )}
        />
      </>
    );
  }
  return (
    <>
      <Header onChange={handleChange} value={value} {...rest} />
      <Products value={value} />
    </>
  );
};

export default ProductsPage;
