import {useState}  from "react";
import './App.css';
import ProductComponent from "./components/ProductComponent.jsx";

function App() {

  const [productsData, setProductsData] = useState([
    {name: "Oppo", cost: 13, quantity: 4},
    {name: "Redmi", cost: 15, quantity: 6},
    {name: "Huawei", cost: 17, quantity: 8}
  ]);

  return (
    <div className="body-section">
      {productsData.map(productData => <ProductComponent name={productData.name} cost={productData.cost} quantity={productData.quantity}/>)}
    </div>
  );
}

export default App;
