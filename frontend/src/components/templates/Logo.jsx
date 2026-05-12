import React from "react";
import "./Logo.css";
import logo from "../../assetes/imgs/image.png";
import { Link } from "react-router-dom";


export default props => {
  return (
    <aside className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </aside>
  );
}
