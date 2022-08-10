import React, { useEffect, useState } from "react";
import { paginate } from "../utils/paginate";
import "../css/Products.css";
import api from "../api";
import _ from "lodash";
import Menu from "../components/Menu";
import GroupList from "./GroupList";
import PropTypes from "prop-types";
import ProductCardsList from "./ProductCardsList";
import { Pagination } from "@mui/material";
import LoadingCard from "./LoadingCard";
const Products = ({ value }) => {
  const [clothes, setClothes] = useState();
  const [sex, setSex] = useState();
  const [filteredClothes, setFilteredClothes] = useState();
  const [filter, setFilter] = useState({
    firstInput: "1",
    secondInput: "999999"
  });
  const [openItems, setOpenItems] = useState({
    sort: { open: false },
    filter: { open: false }
  });
  const [sortBy, setSortBy] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selects, setSelect] = useState([
    { title: "По умолчанию", active: true, id: 1 },
    {
      title: "По возрастанию цены",
      active: false,
      order: "asc",
      id: 2
    },
    {
      title: "По убыванию цены",
      active: false,

      order: "desc",
      id: 3
    }
  ]);

  const getByPrice = (data) => {
    const filteredClothesByPrice = clothes.filter(
      (item) =>
        item.price >= Number(data.firstInput) &&
        item.price < Number(data.secondInput)
    );
    setFilteredClothes(filteredClothesByPrice);
  };

  const pageSize = 8;
  useEffect(() => {
    setClothes();
    api.clothes.fetchAll(sex).then((data) => setClothes(data));
  }, [sex]);
  const handleSex = (item) => {
    setSex(item);
  };

  useEffect(() => {
    if (clothes) {
      getByPrice(filter);
    }
  }, [filter, clothes]);

  const handleOpenList = (item) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [item]: { open: !prevState[item].open }
    }));
  };
  const handleSelect = (item) => {
    const selectsCopy = selects.map((item) => ({
      ...item,
      active: false
    }));
    const indexOfItemInArray = selects.findIndex(
      (select) => select.id === item.id
    );
    selectsCopy[indexOfItemInArray].active = true;
    setSelect(selectsCopy);

    handleSort(item);

    setOpenItems((prevState) => ({
      ...prevState,
      sort: false
    }));
  };
  const handleSort = (item) => {
    if (item.order) {
      setSortBy({ path: "price", order: item.order, title: item.title });
    } else {
      setSortBy();
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleExit = () => {
    setOpenItems((prevState) => ({ ...prevState, filter: false }));
  };

  const handleFilter = (data) => {
    setFilter(data);
  };

  if (filteredClothes) {
    const sortedUsers = sortBy
      ? _.orderBy(filteredClothes, [sortBy.path], [sortBy.order])
      : filteredClothes;

    const filteredSortedUsers = clothes.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    const searchedItems = value ? filteredSortedUsers : sortedUsers;
    const userCrop = paginate(searchedItems, currentPage, pageSize);
    const pageCount = Math.ceil(clothes.length / pageSize);
    return (
      <section className="products">
        <div className="container products__container">
          <div className="foo">
            <div className="sort header__params products__categories-name">
              <i
                className="bi bi-sliders2"
                onClick={() => handleOpenList("filter")}
              ></i>
              <span
                className="header__params-name"
                onClick={() => handleOpenList("filter")}
              >
                Фильтрация
              </span>
            </div>

            <Menu status={openItems.filter.open} onExit={handleExit}>
              <GroupList
                onFilter={handleFilter}
                filter={filter}
                onSex={handleSex}
                sex={sex}
              />
            </Menu>

            <div className="products__categories-name header__params sort">
              <span
                className="header__params-name"
                onClick={() => handleOpenList("sort")}
              >
                {sortBy ? sortBy.title : "Сортировка"}
              </span>
              <div
                className={"select" + (openItems.sort.open ? " active" : "")}
              >
                {selects.map((item) => (
                  <span
                    className={"select-btn" + (item.active ? " active" : "")}
                    key={item.id}
                    onClick={() => handleSelect(item)}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
              <i
                className="bi bi-filter"
                onClick={() => handleOpenList("sort")}
              ></i>
            </div>
          </div>
          <div className="cards">
            {userCrop.length ? (
              <ProductCardsList items={userCrop} sex={sex} />
            ) : (
              <h1>Ничего не найдено</h1>
            )}
          </div>
          {pageCount > 1 && (
            <Pagination
              count={pageCount}
              page={currentPage}
              variant="outlined"
              shape="rounded"
              color="primary"
              size="large"
              onChange={(e, page) => handlePageChange(page)}
              className="pagination"
            />
          )}
        </div>
      </section>
    );
  }
  return (
    <>
      <div className="cards">
        <LoadingCard items={16} />
        <LoadingCard items={16} />
      </div>
    </>
  );
};

Products.propTypes = {
  value: PropTypes.string
};

export default Products;
