import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import HomePage from "./components/home/HomePage.jsx";
import CheckoutPage from "./components/checkout/CheckoutPage.jsx";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/checkout" exact component={CheckoutPage}/>
      </Switch>
    </Router>    
  );
}

export default App;
