import React from "react";
import hamburgerButton from "../../../assets/images/hamburger-button.png";
import classes from "./Menu.module.css";

const menu = props => (
  <div className={classes.Menu} onClick={props.clicked}>
    <img src={hamburgerButton} alt="MenuIcon" />
  </div>
);

export default menu;
