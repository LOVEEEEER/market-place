import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const Search = ({ onChange, value }) => {
  return (
    <>
      <TextField
        sx={{ minWidth: "450px" }}
        label="Поиск..."
        variant="outlined"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Search;
