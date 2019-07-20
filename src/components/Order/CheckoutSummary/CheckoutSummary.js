import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Bon Appetit</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.clicked} btnType="DANGER">
        CANCEL
      </Button>
      <Button clicked={props.clicked} btnType="SUCCESS">
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
