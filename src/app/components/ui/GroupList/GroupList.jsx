import React, { useEffect, useState } from "react";
import "./GroupList.css";
import { validator } from "../../../utils/validator";
import { TextField, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

const GroupList = ({ onFilter, filter, onSex, sex }) => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstInput: filter.firstInput,
    secondInput: filter.secondInput,
    sex: ""
  });
  const formRules = {
    firstInput: {
      onlyNumbers: {
        message: "Можно ввести только число!"
      }
    },
    secondInput: {
      onlyNumbers: {
        message: "Можно ввести только число!"
      }
    }
  };
  const validate = () => {
    const errors = validator(data, formRules);
    if (Number(data.firstInput) > Number(data.secondInput)) {
      errors.firstInput = "Начальная цена не может быть больше конечной";
    }
    setErrors(errors);
  };
  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = ({ target }) => {
    onSex(target.value);
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    onFilter(data);
  };
  const handleReset = () => {
    onFilter({
      firstInput: "1",
      secondInput: "999999"
    });
  };
  return (
    <>
      <div className="products__menu-container menu-container">
        <div className="products__menu-name-block menu-name-block">
          <h1 className="products__menu-name menu-name">Фильтрация</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="first-filter">
            <h3 className="filter-name">Фильтрация по цене:</h3>
            <TextField
              id="outlined-basic"
              label="Начальная цена"
              name="firstInput"
              variant="outlined"
              value={data.firstInput}
              onChange={handleChange}
              error={errors.firstInput}
              style={{ marginBottom: "20px" }}
              helperText={errors.firstInput}
            />
            <TextField
              id="outlined-basic"
              label="Конечная цена"
              name="secondInput"
              variant="outlined"
              value={data.secondInput}
              onChange={handleChange}
              error={errors.secondInput}
              style={{ marginBottom: "20px" }}
              helperText={errors.secondInput}
            />
            <div className="first-filter-buttons-wrapper">
              <Button type="submit" variant="contained" disabled={!isValid}>
                Фильтровать
              </Button>
              <Button type="button" variant="outlined" onClick={handleReset}>
                Сбросить фильтр
              </Button>
            </div>
          </div>
          <div className="second-filter">
            <h3 className="filter-name">Фильтрация по полу:</h3>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Пол</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sex"
                onChange={handleChange}
                value={data.sex}
                name="sex"
              >
                <MenuItem value="all">Показать все</MenuItem>
                <MenuItem value="male">Мужской</MenuItem>
                <MenuItem value="female">Женский</MenuItem>
              </Select>
            </FormControl>
          </div>
        </form>
      </div>
    </>
  );
};
GroupList.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSex: PropTypes.func.isRequired,
  sex: PropTypes.string
};

export default GroupList;
