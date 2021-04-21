import {useState}  from "react";
import './App.css';
import ProductComponent from "./components/ProductComponent.jsx";

function App() {

  const [productData, setProductData] = [

  ];

  return (
    <div className="body-section">
      <ProductComponent />
    </div>
  );
}

export default App;
