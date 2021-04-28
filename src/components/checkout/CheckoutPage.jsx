import {useCheckout} from "../../contexts/CheckoutContext.jsx";
import '../../App.css';

const CheckoutPage = () => {
  const {arrCheckoutAmount} = useCheckout();

  const numCheckoutAmount = arrCheckoutAmount.reduce((x, y ) => {
    return x + y;
  }, 0);

  return (
    <div className="App">
      <h1>Checkout Page {numCheckoutAmount}</h1>
    </div>
  );
}

export default CheckoutPage