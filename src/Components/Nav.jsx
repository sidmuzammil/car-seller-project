import React, { useState } from "react";
import "./Nav.css";
import searchIcon from "../assets/search-icon.svg";
import downicon from "../assets/downicon.svg";

const Nav = ({setSearch}) => {
  return (
    <div className="main-nav">
      <div className="nav-second-container">
        <input type="text" placeholder="search..." onChange={(e)=>setSearch(e.target.value)} />
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <span className="nav-items">
          <p>relevence</p>
          <img src={downicon} alt="" />
          <p>All brands</p> <img src={downicon} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Nav;
