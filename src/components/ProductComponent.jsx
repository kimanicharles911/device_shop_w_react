import {useState} from "react";

const ProductComponent = ({name, cost, photo}) => {

  const [prodQuantity, setProdQuantity] = useState(0);

  const increment = () => {
    setProdQuantity(prodQuantity + 1);
  };

  const decrement = () => {
    if(prodQuantity > 0)
    setProdQuantity(prodQuantity - 1);
  };

  return(
    <div className="product">
      <p>{/* spacing */}</p>

      <div>{photo}</div>
      <p>{name}</p>
      <p>Cost: ${cost}</p>
      Quantity: <button onClick={decrement}>-</button>&nbsp;<button>{prodQuantity}</button>&nbsp;<button onClick={increment}>+</button>&nbsp;<button>Add to Cart</button>
    </div>
  );
};

export default ProductComponent;