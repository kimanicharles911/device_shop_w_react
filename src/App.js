import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import HomePage from "./components/home/HomePage.jsx";


function App() {

  return (
    <Router>
      <Route path="/shop" component={HomePage}/>
    </Router>    
  );
}

export default App;
