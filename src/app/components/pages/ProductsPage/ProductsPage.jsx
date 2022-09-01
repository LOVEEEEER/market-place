import React, { useEffect, useState } from "react";
import { paginate } from "../../../utils/paginate";
import "./Products.css";
import _ from "lodash";
import api from "../../../api";
import Menu from "../../common/Menu/Menu";
import GroupList from "../../ui/GroupList/GroupList";
import PropTypes from "prop-types";
import ProductCardsList from "../../ui/ProductCardsList";
import { Pagination } from "@mui/material";
import LoadingCard from "../../ui/LoadingCard";
import Search from "../../common/Search/Search";

const ProductsPage = () => {
  const [clothes, setClothes] = useState();
  const [sex, setSex] = useState("all");
  const [value, setValue] = useState("");
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

  useEffect(() => {
    api.clothes.fetchAll().then((data) => setClothes(data));
  }, []);

  const handleSearchQuery = ({ target }) => {
    setValue(target.value);
  };

  const getByPrice = (data) => {
    const filteredClothesByPrice = clothes.filter(
      (item) =>
        item.price >= Number(data.firstInput) &&
        item.price < Number(data.secondInput)
    );
    setFilteredClothes(filteredClothesByPrice);
  };

  const pageSize = 10;
  const handleSex = (item) => {
    setSex(item);
    console.log(clothes);
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
    const searchedClothes = filteredClothes.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    const filterBySexClothes = searchedClothes.filter(
      (item) => item.sex === sex
    ).length
      ? searchedClothes.filter((item) => item.sex === sex)
      : searchedClothes;

    const sortedUsers = sortBy
      ? _.orderBy(filterBySexClothes, [sortBy.path], [sortBy.order])
      : filterBySexClothes;

    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    const pageCount = Math.ceil(sortedUsers.length / pageSize);
    return (
      <section className="products">
        <div className="container products__container">
          <div className="foo">
            <div className="sort header__params products__categories-name">
              <div
                className="filtration"
                onClick={() => handleOpenList("filter")}
              >
                <i className="bi bi-sliders2"></i>
                <span className="header__params-name">Фильтрация</span>
              </div>
            </div>

            <Search onChange={handleSearchQuery} value={value} />

            <div className="products__categories-name header__params sort">
              <div
                className="filtration"
                onClick={() => handleOpenList("sort")}
              >
                <span className="header__params-name">
                  {sortBy ? sortBy.title : "Сортировка"}
                </span>
                <i className="bi bi-filter"></i>
              </div>
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
            </div>

            <Menu status={openItems.filter.open} onExit={handleExit}>
              <GroupList
                onFilter={handleFilter}
                filter={filter}
                onSex={handleSex}
                sex={sex}
              />
            </Menu>
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
              color="secondary"
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
      <div className="container">
        <div className="cards">
          <LoadingCard items={6} />
          <LoadingCard items={6} />
        </div>
      </div>
    </>
  );
};

ProductsPage.propTypes = {
  value: PropTypes.string
};

export default ProductsPage;
