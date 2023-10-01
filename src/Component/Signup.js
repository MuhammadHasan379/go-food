import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { useDispatch, useSelector } from "react-redux";


export default function Signup() {

  const navigate = useNavigate();
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [LoggedIn, setLoggedIn] = useState(0)
  const logToggle = useSelector((state)=>state.LoggedIn)
  const dispatch = useDispatch()


  const handleSubmit=async(e)=>{

    e.preventDefault();

    console.log(email)
    console.log(password)
    if (password === confirmPassword){
      try{
      const response = await Axios.post('http://localhost:3001/Login', {
        email: email,
        password: password
        
      })

        if (response.data.error){
          console.log('Account with this email already exists')
          alert('An account with this email already exists')

        }
        if (response.data.message){
          console.log('Successfully Registered')
          navigate(-2)
          alert('Registered Successfully')
          dispatch({
            type: 'LogToggleOn'
          })
         
        }
    }
    catch{
      console.log('something went wrong')
      alert('Something went wrong Try again later')
    }
  }
    
    else{
      console.log('Make sure to type the correct password')
    }
  }

  return (
    <div style={{width:'100vw', height: '100vh', overflow: 'hidden'}}>
        <img src="https://images.pexels.com/photos/776314/pexels-photo-776314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image background" style={{width: '100%', height: '100%', position: 'absolute', zIndex: '-1'}} />
    <div className="Navbar" style={{position: 'absolute', margin: '1em auto'}}>
        <Link to='/'>
        <button className="btn btn-primary" >
            Home
        </button>
        </Link>
    </div>
    <div style={{width:'45vw',margin: '13em auto'}}>
      <form  onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group">
            <h1 style={{color: 'white', fontSize: '2em', fontWeight: 'bolder'}}>Signup Before Placing An Order</h1>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{margin: '2em auto'}}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
