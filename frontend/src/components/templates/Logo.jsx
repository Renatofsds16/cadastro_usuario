import React from "react";
import "./Logo.css";
import logo from "../../assetes/imgs/image.png";


export default props => {
  return (
    <aside className="logo">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </aside>
  );
}
