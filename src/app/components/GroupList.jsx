import React, { useEffect, useState } from "react";
import "../css/GroupList.css";
import { validator } from "../utils/validator";
import {
  TextField,
  Button,
  Accordion,
  // Typography,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    // onSex(target.value);
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(data);
  };
  return (
    <>
      <div className="products__menu-container menu-container">
        <div className="products__menu-name-block menu-name-block">
          <h1 className="products__menu-name menu-name">Фильтрация</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="first-filter">
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {/* <Typography>По цене:</Typography> */}
              </AccordionSummary>
              <AccordionDetails>
                {/* <Typography> */}
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
                <Button type="submit" variant="contained" disabled={!isValid}>
                  Contained
                </Button>
                {/* </Typography> */}
              </AccordionDetails>
            </Accordion>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Пол</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sex"
                onChange={handleChange}
                value={sex}
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
