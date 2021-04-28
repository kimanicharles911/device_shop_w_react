import {useState, useContext}  from "react";
import {Link} from "react-router-dom";
import '../../App.css';
import {useCheckout} from "../../contexts/CheckoutContext.jsx";
import ProductComponent from "./components/ProductComponent.jsx";
import RedmiPhoto from "../../images/redmi_note_10_5G_phone.jpeg";
import HuaweiPhoto from "../../images/huawei_p40_pro_phone.jpg";
import OppoPhoto from "../../images/Oppo_Reno_5F.jpg";
import IPhonePhoto from "../../images/iphone_X_phone.jpg";
import XiaomiPhoto from "../../images/xiaomi_Mi_11i_phone.jpg";
import SamsungS7Photo from "../../images/samsung_S7.png";
import HPSpectrePhoto from "../../images/HP-Spectre-13-X360.jpg";
import DellPhoto from "../../images/Dell-XPS-13-laptop.jpg";
import AcerSwiftPhoto from "../../images/Acer-Swift-5-Pro-intel-laptop.jpg";
import AsusPhoto from "../../images/Asus-ExpertBook-B950.jpg";

const HomePage = () => {

  const [productsData, setProductsData] = useState([
    {name: "Oppo", cost: 13, photo: <img src={OppoPhoto} width="100px" height="100px" alt="Oppo_Photo" />,  quantity: 0 },
    {name: "Redmi", cost: 15, photo: <img src={RedmiPhoto} width="100px" height="100px" alt="RedMi_Photo" />, quantity: 0 },
    {name: "Huawei", cost: 17, photo: <img src={HuaweiPhoto} width="100px" height="100px" alt="Huawei_Photo" />,  quantity: 0 },
    {name: "IPhone", cost: 23 , photo: <img src={IPhonePhoto} width="100px" height="100px" alt="IPhone_Photo" />,  quantity: 0 },
    {name: "Xiaomi", cost: 17 , photo: <img src={XiaomiPhoto} width="100px" height="100px" alt="Xiaomi_Photo" />,  quantity: 0 },
    {name: "Samsung S7", cost: 21 , photo: <img src={SamsungS7Photo} width="100px" height="100px" alt="Samsung S7_Photo" />,  quantity: 0 },
    {name: "HP Spectre", cost: 200 , photo: <img src={HPSpectrePhoto} width="100px" height="100px" alt="HP Spectre_Photo" />,  quantity: 0 },
    {name: "Dell", cost: 175 , photo: <img src={DellPhoto} width="100px" height="100px" alt="Dell_Photo" />,  quantity: 0 },
    {name: "Acer Swift", cost: 150 , photo: <img src={AcerSwiftPhoto} width="100px" height="100px" alt="Acer Swift_Photo" />,  quantity: 0 },
    {name: "Asus", cost: 135 , photo: <img src={AsusPhoto} width="100px" height="100px" alt="Asus_Photo" />,  quantity: 0 }
  ]); 
  const [arrNumCart, arrSetNumCart] = useState([]);
  const {arrCheckoutAmount, setArrCheckoutAmount} = useCheckout();

  const handleProductQuantityChange = ({ name, quantity}) => {
    const newProductList = [...productsData];
    const prodIndex = productsData.findIndex(x => x.name === name);
    newProductList[prodIndex].quantity = quantity;
    setProductsData(newProductList);
  };

  const handleAddToCart = ( theQuantity, name ) => {
    const newArrNumCart = [...arrNumCart];
    const newSum = theQuantity;
    newArrNumCart.push(newSum);
    arrSetNumCart(newArrNumCart);
    
    const xProdIndex = productsData.findIndex(x => x.name === name);
    const newArrCheckoutAmount = [...arrCheckoutAmount];
    const quantityByCost = theQuantity * productsData[xProdIndex].cost;
    newArrCheckoutAmount.push(quantityByCost);
    setArrCheckoutAmount(newArrCheckoutAmount);

  };

  const quantitySum = arrNumCart.reduce((x, y ) => {
    return x + y;
  }, 0);

  const numCheckoutAmount = arrCheckoutAmount.reduce((x, y ) => {
    return x + y;
  }, 0);

  return (
    <div className="body-section">
      <div style={{ marginLeft: '29.5rem'}}> 
        🛒 {" "} {quantitySum} {" "}                  <span style={{ marginLeft: '4.7rem'}}></span>  
        Total Bill 💲{numCheckoutAmount} {" "}  <span style={{ marginLeft: '0.8rem'}}></span> 
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link> 
      </div>     
      {productsData.map((productData, i) => <ProductComponent key={i} name={productData.name} cost={productData.cost} photo={productData.photo} onQuantityChange={handleProductQuantityChange} onClickAddToCart={handleAddToCart}/>)}
    </div>
  );
}

export default HomePage;