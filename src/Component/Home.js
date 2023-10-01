import React from 'react'
import Navbar from './Navbar'
import Carousal from './Carousal'
import Card from './Card'
import Slider from './Slider'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import { useSelector } from 'react-redux'
import LooginHome from './LooginHome'


const Home = () => {
    
    const images = [
        "https://images.pexels.com/photos/15010291/pexels-photo-15010291/free-photo-of-delicious-burger-on-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10701944/pexels-photo-10701944.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/2874990/pexels-photo-2874990.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/7219747/pexels-photo-7219747.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/14709723/pexels-photo-14709723.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      ];
      const logg = useSelector((state)=>state.LoggedIn)

  return (
    <div>
      <Navbar></Navbar>
      <div style={{overflow: 'hidden'}}>
      <Carousal images={images}></Carousal>
      </div>
      {
        (logg===true) ?<Slider>{console.log('this',logg)}:</Slider>:<LooginHome/>
      }
      <Aboutus></Aboutus> 
      <Contactus></Contactus>
    </div>
  )
}


export default Home;
