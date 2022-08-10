import React from "react";
import PropTypes from "prop-types";
import "../css/Search.css";
import { useHistory } from "react-router-dom";
const Search = ({ items, value, onChange, search, onToggleSearch }) => {
  const history = useHistory();
  const searchedItems = items.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  const handleToggleToProduct = (id) => {
    history.push("/products/" + id);
  };
  return (
    <>
      <div className={"input-area" + (search ? " active" : "")}>
        <div className="input-wrapper">
          <input
            onBlur={onToggleSearch}
            type="text"
            className={"search-input" + (search ? " active" : "")}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Поиск..."
          />
          <i className="bi bi-search" onClick={onToggleSearch}></i>
        </div>
        {items && value && search && (
          <div className="search-block">
            <ul className="searched-items-list">
              {searchedItems.map((item) => (
                <li
                  className="searched-item"
                  key={item.id}
                  onClick={() => handleToggleToProduct(item.id)}
                >
                  <p className="searched-title">{item.title}</p>
                  <span className="searched-price">{item.price}$</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
Search.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  search: PropTypes.bool,
  onToggleSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func
};

export default Search;
