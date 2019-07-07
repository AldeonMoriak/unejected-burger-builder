import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";
const attachedClasses = [classes.Menu, classes.MobileOnly];
const toolbar = props => (
  <header className={classes.Toolbar}>
    <div className={attachedClasses.join(" ")}>
      <Menu clicked={props.openDrawer} />
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
