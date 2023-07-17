import CartButton from "./Cart/CartButton";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../Store/LoginContext";
import { Button } from "react-bootstrap";


export default function Navbar(props){

    const authcxt=useContext(AuthContext);

return(
    <header>
    <ul className="header">
      <li>
        <NavLink className={() => "list"} to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={() => "list"} to="/">
          Store
        </NavLink>
      </li>
      <li>
        <NavLink className={() => "list"} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={() => "list"} to="/contactus">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink className={() => "list"} to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <CartButton onClick={props.onShow}></CartButton>
      </li>
      <li><Button style={{marginLeft:'1cm'}} variant="danger"  onClick={authcxt.logout}>Logout</Button></li>
    </ul>
  </header>
)
}