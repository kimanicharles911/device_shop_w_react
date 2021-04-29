import {useCheckout} from "../../contexts/CheckoutContext.jsx";
import "./CheckoutPage.css";
import VisaLogo from "../../images/payment-methods/visa.png";
import PayPalLogo from "../../images/payment-methods/paypal.png";
import MasterCardLogo from "../../images/payment-methods/mastercard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const CheckoutPage = () => {
  const {arrCheckoutAmount} = useCheckout();

  const numCheckoutAmount = arrCheckoutAmount.reduce((x, y ) => {
    return x + y;
  }, 0);

  const dummyDiscount =  0.1 * numCheckoutAmount;

  const shippingFee = 5.43;

  const amountToPay = numCheckoutAmount - dummyDiscount + shippingFee;

  return (
    <div className="checkout__body">
      <div className="iphone">
        <header className="header">
          <h1 className="checkout__heading">Checkout</h1>
        </header>

        <form action="" className="form" method="POST">
          <div>
            <h2 className="checkout__heading__two">Address</h2>

            <div className="card">
              <address>
                Charles Kimani<br />
                Vienna court, Yaya Center Crescent, West Wing, Nairobi, 32104,<br />
                Kenya
              </address>
            </div>
          </div>

          <fieldset>
            <legend>Payment Method</legend>

            <div className="form__radios">
              <div className="form__radio">
                <label htmlFor="visa"><img src={VisaLogo} width="20px" height="20px" alt="Visa__Logo" /></label>
                <input checked id="visa" name="payment-method" type="radio" />
              </div>

              <div className="form__radio">
                <label htmlFor="paypal"><img src={PayPalLogo} width="20px" height="20px" alt="PayPal__Logo" /></label>
                <input id="paypal" name="payment-method" type="radio" />
              </div>

              <div className="form__radio">
                <label htmlFor="mastercard"><img src={MasterCardLogo} width="20px" height="20px" alt="MasterCard__Logo" /></label>
                <input id="mastercard" name="payment-method" type="radio" />
              </div>
            </div>
          </fieldset>

          <div>
            <h2 className="checkout__heading__two">Order Summary</h2>

            <table>
              <tbody>
                <tr>
                  <td>Items Total</td>
                  <td align="right">${numCheckoutAmount}</td>
                </tr>
                <tr>
                  <td>Discount 10%</td>
                  <td align="right">${dummyDiscount}</td>
                </tr>
                <tr>
                  <td>Shipping fee</td>
                  <td align="right">${shippingFee}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td align="right">{amountToPay}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <button className="button button--full design-btn" type="submit"><FontAwesomeIcon icon={faShoppingBag} />Buy Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage