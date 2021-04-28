import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import HomePage from "./components/home/HomePage.jsx";
import CheckoutPage from "./components/checkout/CheckoutPage.jsx";
import {CheckoutContext, CheckoutProvider} from "./contexts/CheckoutContext.jsx";

function App() {
  const [arrCheckoutAmount, setArrCheckoutAmount] = useState([]);

  return (
    <Router>
      <Switch>
        <CheckoutContext.Provider value={{arrCheckoutAmount, setArrCheckoutAmount}}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/checkout" exact component={CheckoutPage}/>
        </CheckoutContext.Provider>
      </Switch>
    </Router>    
  );
}

export default App;