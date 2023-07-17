import { Switch,Route, Redirect } from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Root";
import Home from "./Components/Pages/Home";
import ContactUS from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import { useContext } from "react";
import AuthContext from "./Store/LoginContext";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";



const App=()=> {
const authcxt=useContext(AuthContext);


  return (
    <div>
      {authcxt.isLoggedIn &&<Navbar/>}
  <Switch>
      <Route path='/' exact>
     {authcxt.isLoggedIn && <Root/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
  <Route path='/about'>
  {authcxt.isLoggedIn && <About/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
    <Route path='/home'>
    {authcxt.isLoggedIn && <Home/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
    <Route path='/contactus'>
    {authcxt.isLoggedIn && <ContactUS/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/signup'>
      <SignUp/>
    </Route>
    <Route path='/productdetails/:productname'>
    {authcxt.isLoggedIn && <ProductDetails/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
  </Switch>
  </div>
  );
}

export default App;
