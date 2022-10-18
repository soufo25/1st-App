import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import  './login.css'
import { AuthContext } from '../store/AuthContext';



const Login = () =>{
    const [error, setError] = useState(false);
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate('/all-meetup')
  })
   .catch((error) => {
   setError(true)
  });  
    };

    const handleSignup = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate('/all-meetup')
      })
       .catch((error) => {
       setError(true)
      });
    };

    
   return(
    <div>
      <div>
        <h1>Join Thousands of Adventurers Like You and Explore Some the Most Beautiful Sites in the World</h1>
      </div>
    <div className = 'logins'> 
      <form className ='form'>
        <input  type ='email' placeholder = "Email" onChange={e=>setEmail(e.target.value)}/>
        <input type = 'password' placeholder = 'Password' onChange={e=>setPassword(e.target.value)} />
        <button type = 'submit' onClick={handleLogin}>Login</button>
        {error && <span>Wrong email or password! Sign up?</span>}
        <button type = 'submit' onClick={handleSignup}>SignUp</button>
      </form>
      </div>
    </div>
   )
};


export default Login;