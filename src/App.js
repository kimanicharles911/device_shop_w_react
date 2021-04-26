import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import HomePage from "./components/home/HomePage.jsx";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
      </Switch>
    </Router>    
  );
}

export default App;
