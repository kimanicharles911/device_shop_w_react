import {useState} from "react";

const ProductComponent = ({name, cost, photo, onQuantityChange }) => {

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

  return(
    <div className="product">
      <div>
        <p>{/* spacing */}</p>

        <div> &nbsp;&nbsp; {photo}</div>
        <p> &nbsp; {name}</p>
        <p> &nbsp; Cost: ${cost}</p>
        &nbsp; Quantity:  <button onClick={decrement}>-</button>&nbsp;<button>{prodQuantity}</button>&nbsp;<button onClick={increment}>+</button>&nbsp;<button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductComponent;