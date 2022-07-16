import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";

import Products from "./pages/Auth/Products"; 
import ProductDetail from "./pages/Auth/ProductDetail"; 
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
     <div id="content" >   
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/:product_id" component={ProductDetail} />
        <Route path="/signin"  component={Signin} />
        <Route path="/signup"  component={Signup} />
      </Switch>
      </div>
    </div>
  </Router>
  );
}


export default App;
