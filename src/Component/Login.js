import React, { useEffect, useState } from "react";
import image from "../../src/1.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export default function Login() {

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const logg = useSelector(state=>state.LoggedIn) 
  const dispatch = useDispatch()

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      const Response = await Axios.post('http://localhost:3001/Register', {email: email, password: password})

      if (Response.data.message){
        window.location.replace('http://localhost:3000')
        dispatch({
          type: 'LogToggleOn'
        })

      }
      if (Response.data.error){
        alert('Email or Password is incorrect')
      }

    }

    catch(error){
      console.log(error)
    }
   

  }



  return (
    <div style={{ height: "100vh", width: "100vw", overflow: 'hidden' }}>
      <img
        src={image}
        alt="backgroundimage"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
      <div
        className="Navbarforlogin"
        style={{
          position: "absolute",
          margin: "1em auto",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <button
            type="Home"
            className="btn btn-primary"
            style={{ margin: "1 em auto" }}
          >
            Back
          </button>
        </Link>
        <Link to="/Signup">
        <button
          type="Home"
          className="btn btn-primary"
          style={{ margin: "1 em auto" }}
        >
          Signup
        </button>
        </Link>
      </div>
      <div className="Login-wrapper" style={{ display: "flex" }}>
        <div className="Login-Information">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            beatae quas velit, dolor architecto commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            dolor delectus praesentium fuga quibusdam quos saepe, eligendi dicta
            totam laboriosam nihil ipsa esse ullam, non soluta expedita hic
            aspernatur assumenda.
          </p>
        </div>
        <form className="login" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <button type="submit" className="btn btn-primary" style={{width: '30%'}}>
              Submit
            </button>
            </div>
        </form>

      </div>
    </div>
  );
}
