import React from "react";
import PropTypes from "prop-types";

const Menu = ({ status, children, onExit }) => {
  return (
    <div className={"menu block" + (status ? " active" : "")}>
      <i className="bi bi-x-lg" onClick={onExit}></i>
      {children}
    </div>
  );
};

Menu.propTypes = {
  status: PropTypes.bool,
  children: PropTypes.object,
  onExit: PropTypes.func
};

export default Menu;
