

const ProductComponent = ({name, cost, quantity, photo}) => {
  return(
    <div className="product">
      <p>{/* spacing */}</p>
      
      <div>{photo}</div>
      <p>{name}</p>
      <p>${cost}</p>
      <p>Quantity{quantity}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductComponent;