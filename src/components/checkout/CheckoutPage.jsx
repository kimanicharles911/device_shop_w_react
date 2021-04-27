import {useState, useContext} from "react";
import {CheckoutContext} from "../../contexts/CheckoutContext.jsx";
import '../../App.css';

const CheckoutPage = () => {

  const {arrCheckoutAmount} = useContext(CheckoutContext);

  return (
    <div className="App">
      <h1>Checkout Page {arrCheckoutAmount}</h1>
    </div>
  );
}

export default CheckoutPage