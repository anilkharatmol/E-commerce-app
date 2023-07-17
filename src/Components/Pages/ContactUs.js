import classes from './ContactUs.module.css';
import { useRef } from 'react';;

export default function ContactUS(){

    const nameRef = useRef('');
    const emailRef = useRef('');
    const phonenumberRef = useRef('');
  
   async function submitHandler(event) {
      event.preventDefault();
  
    
  
      const obj = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phonenumber: phonenumberRef.current.value,
      };
  
      const response=await fetch('https://react-movies-a8fde-default-rtdb.firebaseio.com/UserDetails.json',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
          'Content-type':'application/json'
        }
      })
      const data=await response.json();
        console.log(data);
    }


    return(
        <div >
        <form onSubmit={submitHandler}>
            <h1 className={classes.h1}>ENTER YOUR DETAILS</h1>
        <div className={classes.control}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email id:</label>
            <input type="email" id='email' ref={emailRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='phonenumber'>Phone Number:</label>
          <input type='number' id='phonenumber' ref={phonenumberRef} />
        </div>
        <div className={classes.control}>
        <button type='submit'>Submit</button>
        </div>
      </form>
      </div>
    )
}