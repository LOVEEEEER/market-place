import React from "react";
import Header from "../components/common/Header/Header";
import ProductsPage from "../components/pages/ProductsPage/ProductsPage";
import { useParams, useHistory } from "react-router-dom";
import ProductPage from "../components/pages/ProductPage/ProductPage";

const Products = ({ ...rest }) => {
  const { id: productId } = useParams();
  const history = useHistory();
  const handleToggleToProduct = (id) => {
    history.push("/products/" + id);
  };
  return (
    <>
      {productId ? (
        <>
          <Header {...rest} onToggleToProduct={handleToggleToProduct} />
          <ProductPage productId={productId} {...rest} />
        </>
      ) : (
        <>
          <Header {...rest} onToggleToProduct={handleToggleToProduct} />
          <ProductsPage />
        </>
      )}
    </>
  );
};

export default Products;
