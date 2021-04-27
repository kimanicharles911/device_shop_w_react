import {useState} from "react";
import "./ProductComponent.css";

const ProductComponent = ({name, cost, photo, onQuantityChange, onClickAddToCart }) => {

  const [prodQuantity, setProdQuantity] = useState(0);

  const increment = () => {
    setProdQuantity(prodQuantity + 1);
    onQuantityChange({ name, quantity: prodQuantity + 1});
  };

  const decrement = () => {
    if(prodQuantity > 0){
      setProdQuantity(prodQuantity - 1);
      onQuantityChange({ name, quantity: prodQuantity - 1});
    }
  };

  const pushToCart = () => {
    onClickAddToCart(prodQuantity, name);
  };

  return(
    <div className="product">
      <div>
        <p>{/* spacing */}</p>

        <div className="product__image"> &nbsp;&nbsp; {photo}</div>
        <p className="product__title"> &nbsp; {name}</p>
        <p className="product__cost"> &nbsp; ${cost}</p>
        &nbsp; Qty:  {prodQuantity} &nbsp;<button onClick={decrement}>-</button>&nbsp;&nbsp;<button onClick={increment}>+</button> <br></br><br></br>
        <button onClick={pushToCart}>🛒 Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductComponent;