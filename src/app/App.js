import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductsPage from "./layouts/ProductsPage";
import { Route, Redirect } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [theme, setTheme] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: theme
    }
  });

  const handleChangeTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Route
          path="/products/:id?"
          component={() => (
            <ProductsPage theme={theme} onChangeTheme={handleChangeTheme} />
          )}
        />
        <Redirect from="/" exact to="/products" />
      </ThemeProvider>
    </>
  );
}

export default App;
