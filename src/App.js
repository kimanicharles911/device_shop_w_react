import {useState}  from "react";
import './App.css';
import ProductComponent from "./components/ProductComponent.jsx";
import RedmiPhoto from "./images/redmi_note_10_5G_phone.jpeg";
import HuaweiPhoto from "./images/huawei_p40_pro_phone.jpg";
import OppoPhoto from "./images/Oppo_Reno_5F.jpg";


function App() {

  const [productsData, setProductsData] = useState([
    {name: "Oppo", cost: 13, photo: <img src={OppoPhoto} width="100px" height="100px"/> },
    {name: "Redmi", cost: 15, photo: <img src={RedmiPhoto} width="100px" height="100px" />},
    {name: "Huawei", cost: 17, photo: <img src={HuaweiPhoto} width="100px" height="100px" />}
  ]);

  return (
    <div className="body-section">
      {productsData.map(productData => <ProductComponent name={productData.name} cost={productData.cost} photo={productData.photo}/>)}
      {/* <p><img src={iPhone} /></p> */}
    </div>
  );
}

export default App;
