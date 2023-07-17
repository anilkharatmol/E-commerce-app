import CartContext from "../../Store/CartContext";
import React,{useContext,useEffect,useCallback} from "react";
import { Button,Badge } from "react-bootstrap";

export default function CartButton(props){
    const Ctx= useContext(CartContext);
let quantity=0;

Ctx.items.forEach((item)=>{
    quantity=quantity+item.quantity;
})


const newEmailId = localStorage.getItem('email').replace(/[.@]/g,""); 
const Url=`https://crudcrud.com/api/4e3d553649ad4a2a841420c3e03d40fb/cart${newEmailId}`;

const fetchExpensesHandler=useCallback(async ()=>{
  const response=await  fetch(Url);
  
  const data= await response.json();

    console.log(data);
    

Ctx.fetchItems(data)
   
},[Ctx,Url])

useEffect(()=>{fetchExpensesHandler()},[]);
  
 
 return(
<Button variant="success"  onClick={props.onClick}>Cart
<Badge >{quantity}</Badge></Button>
 )

}