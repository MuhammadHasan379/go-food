import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../src/Logos.jpg'
import {useRef} from 'react';

import { useSelector, useDispatch } from 'react-redux';


const Navbar = () => {

    const ref = useRef(null);

    const navbarLinks = {
        textDecoration: 'none', 
        listStyle: 'none', 
        marginRight: '2rem',
        fontWeight: 'bolder',
        color: 'White',
        fontSize: '0.9em',
    }
    const dispatch = useDispatch()
    const logg = useSelector((state)=>state.LoggedIn)

    const hanldeLogout = ()=>{
      dispatch({
          type: 'LogToggleOff'
      })
    }

    const handleClick = ()=>{
      ref.current ?.scrollIntoView({behavior: 'smooth'});
    }


  return (

    <nav className='Navbar-wrapper' style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '1em',background: '#272829'}}>
       {/* <a class="navbar-brand" to="javascript:void(0)">Logo</a> */}
       <div className="logo" style={{textDecoration: 'none', 
        listStyle: 'none', 
        marginRight: '1rem',
        fontWeight: 'bolder',
        color: 'White',
        fontSize: '1em'}}>GoFood</div>
        <ul style={{listStyle: 'none', textDecoration: 'none', display: 'flex', justifyContent: 'space-evenly', marginBottom: '0rem'}}>
        {(logg === true) ? <div></div> : <li><Link style = {navbarLinks} to="/" onClick={handleClick}>About Us</Link> </li>}
        { (logg === true) ?<li> <Link style = {navbarLinks} to="/">Contact Us</Link> </li>  : <li> <Link style = {navbarLinks} to="/">Contact Us</Link> </li>}
        {
          (logg ===true)? <li onClick={hanldeLogout}><Link to ='/' style= {navbarLinks}> LogOut</Link> </li> :         <li> <Link style = {navbarLinks} to="/Login">Login</Link> </li>
        
        }
        {
          (logg ===true)? <li><Link style = {navbarLinks} to='/Cart' >Cart</Link> </li> : <div></div>
        }
        

        </ul>


    </nav>
   
  )
}


export default Navbar;
