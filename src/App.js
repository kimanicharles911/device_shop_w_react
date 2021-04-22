import {useState}  from "react";
import './App.css';
import ProductComponent from "./components/ProductComponent.jsx";
import RedmiPhoto from "./images/redmi_note_10_5G_phone.jpeg";
import HuaweiPhoto from "./images/huawei_p40_pro_phone.jpg";
import OppoPhoto from "./images/Oppo_Reno_5F.jpg";

function App() {

  const [productsData, setProductsData] = useState([
    {name: "Oppo", cost: 13, photo: <img src={OppoPhoto} width="100px" height="100px" alt="Oppo Photo" />,  quantity: 0 },
    {name: "Redmi", cost: 15, photo: <img src={RedmiPhoto} width="100px" height="100px" alt="RedMi Photo" />, quantity: 0 },
    {name: "Huawei", cost: 17, photo: <img src={HuaweiPhoto} width="100px" height="100px" alt="Huawei Photo" />,  quantity: 0 }
  ]); 

  const handleProductQuantityChange = ({ name, quantity}) => {
    const newProductList = [...productsData];
    const prodIndex = productsData.findIndex(x => x.name === name);
    newProductList[prodIndex].quantity = quantity;
    setProductsData(newProductList);
  };

  const totalQuantity = productsData.reduce((result, {quantity = 0}) => {
    return result += quantity;
  }, 0);

  return (
    <div className="body-section">
      <div>🛒 {totalQuantity}</div>
      {productsData.map((productData, i) => <ProductComponent key={i} name={productData.name} cost={productData.cost} photo={productData.photo} onQuantityChange={handleProductQuantityChange}/>)}
    </div>
  );
}

export default App;
