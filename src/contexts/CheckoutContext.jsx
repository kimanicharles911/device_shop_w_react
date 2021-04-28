import {createContext, useState, useContext} from "react";

export const CheckoutContext = createContext(null);

export const CheckoutProvider = (props) => {
  const [ arrCheckoutAmount, setArrCheckoutAmount ] = useState([]);
  const value = { arrCheckoutAmount, setArrCheckoutAmount };
  return <CheckoutContext.Provider {...props} value={value} />
};

export const useCheckout = () => {
  const value = useContext(CheckoutContext);
  if(!value){
    throw new Error("useCheckout must be used within CheckoutProvider");
  }
  return value;
};