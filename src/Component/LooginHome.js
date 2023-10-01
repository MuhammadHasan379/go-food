import React from 'react'
import './looginHome.css'
import { Link } from 'react-router-dom'


export default function LooginHome() {
  return (
    <div style={{ height: '740px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#FFB000', marginTop:'30px'}}>
      <div className="leftHalf">
        {/*
        style={{borderRadius: '30px', width: '20vw', height: '149px', position: 'absolute', top: '22px', left: '280px', zIndex: '0'}}
        style={{borderRadius: '30px', width: '20vw', height: '156px', position: 'absolute', top: '190px', zIndex: '0', marginLeft: '20px'}}
        style={{borderRadius: '30px', width: '20vw', height: '400px', position: 'absolute', marginLeft: '150px', marginTop: '100px' , zIndex: '1'}}
        style={{borderRadius: '30px', width: '20vw', height: '151px', position: 'absolute', zIndex: '0', top: '438px', marginLeft: '283px'}}
          */
        }
        <div className="image1" >
            <img src="https://images.pexels.com/photos/792027/pexels-photo-792027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius: '30px'}} alt="" />
        </div>
        <div className="image2" >
        <img src="https://images.pexels.com/photos/792027/pexels-photo-792027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius: '30px'}} alt="" />

        </div>
        <div className="image3" >
            <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius: '30px'}}  alt="" />
        </div>
        <div className="image4" >
        <img src="https://images.pexels.com/photos/792027/pexels-photo-792027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius: '30px'}} alt="" />

        </div>
      </div>
      <div className="righttHalf">
        <div className='Login' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '99vh'}}>
          <p style={{marginTop: '0',marginBottom: '1rem', padding: '47px',fontWeight: '500', color: 'white',fontSize: 'calc(20px + 0.3vw)'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sunt quae quo aut officiis alias recusandae molestiae. Quibusdam, ducimus eaque at, et eius dicta dolorum non iste quasi, ullam veniam!</p>
          <button className="loginbutton" style={{border: 'none', borderRadius: '10px', padding: '17px 117px', fontSize: '22px'}}>
            <Link to='/Login' style={{color: 'black', fontWeight:'500', textDecoration: 'none'}}>Login To Explore Further</Link></button>
        </div>

      </div>

    </div>
  )
}
