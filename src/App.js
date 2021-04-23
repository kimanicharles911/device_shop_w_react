import {useState}  from "react";
import './App.css';
import ProductComponent from "./components/ProductComponent.jsx";
import RedmiPhoto from "./images/redmi_note_10_5G_phone.jpeg";
import HuaweiPhoto from "./images/huawei_p40_pro_phone.jpg";
import OppoPhoto from "./images/Oppo_Reno_5F.jpg";

function App() {

  const [productsData, setProductsData] = useState([
    {name: "Oppo", cost: 13, photo: <img src={OppoPhoto} width="100px" height="100px" alt="Oppo_Photo" />,  quantity: 0 },
    {name: "Redmi", cost: 15, photo: <img src={RedmiPhoto} width="100px" height="100px" alt="RedMi_Photo" />, quantity: 0 },
    {name: "Huawei", cost: 17, photo: <img src={HuaweiPhoto} width="100px" height="100px" alt="Huawei_Photo" />,  quantity: 0 }
  ]); 
  const [numCart, setNumCart] = useState([]);
  const [numBill, setNumBill] = useState([]);
  const [checkoutAmount, setCheckoutAmount] = useState();
  const [arrCheckoutAmount, setArrCheckoutAmount] = useState([]);

  const handleProductQuantityChange = ({ name, quantity}) => {
    const newProductList = [...productsData];
    const prodIndex = productsData.findIndex(x => x.name === name);
    newProductList[prodIndex].quantity = quantity;
    setProductsData(newProductList);
  };

  const handleAddToCart = ( theQuantity, name, cost ) => {
    const newNumCart = [...numCart];
    const newSum = theQuantity;
    newNumCart.push(newSum);
    setNumCart(newNumCart);
    
    console.log("Kaka" + name);
    const xProdIndex = productsData.findIndex(x => x.name === name);
    console.log(theQuantity * productsData[xProdIndex].cost);
    const newArrCheckoutAmount = [...arrCheckoutAmount];
    const quantityByCost = theQuantity * productsData[xProdIndex].cost;
    newArrCheckoutAmount.push(quantityByCost);
    setArrCheckoutAmount(newArrCheckoutAmount);

  };

  const quantitySum = numCart.reduce((x, y ) => {
    return x + y;
  }, 0);

  const bill = productsData.reduce((result, {cost, quantity = 0}) => {
    return result += quantity * cost;
  }, 0);

  const billTwo = productsData.reduce((result, {quantity = 0}) => {
    return result += quantity;
  }, 0);
  
  let pushProductCost = [];
  for(let i = 0; i < productsData.length; i++){
    pushProductCost.push(productsData[i].quantity * productsData[i].cost);
  }
  const sumProductCost = pushProductCost.reduce((x, y) => {
    return x +y;
  }, 0);

  const checkout = () => {
    setCheckoutAmount(bill)
  };

  const numCheckoutAmount = arrCheckoutAmount.reduce((x, y ) => {
    return x + y;
  }, 0);

  return (
    <div className="body-section">
    <div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🛒 {quantitySum} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Total Bill 💲{numCheckoutAmount} &nbsp; &nbsp; <button onClick={checkout}>Proceed to Checkout</button> {/* &nbsp; &nbsp; 💲 ignore: {bill} of {billTwo}&nbsp; &nbsp; 💲 ignore: {sumProductCost} */} </div>     
      {productsData.map((productData, i) => <ProductComponent key={i} name={productData.name} cost={productData.cost} photo={productData.photo} onQuantityChange={handleProductQuantityChange} onClickAddToCart={handleAddToCart}/>)}
    </div>
  );
}

export default App;
