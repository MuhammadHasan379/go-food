import React from'react'
import { useSwiper } from 'swiper/react'

const SwiperButton = ({color, arrowColor}) => {
    const swiper = useSwiper()

    const Button = {
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '2em' 
    }

    return(
        <div className='swiper-nav-btns' style={Button}>
                    {console.log(color)}

            <button onClick={()=> swiper.slidePrev()} style={{ padding: '6px 10px', backgroundColor: color, marginRight: '20px', border: 'none', borderRadius: '10px', color: arrowColor, fontWeight: 'bold'}}>&#60;</button>
            <button onClick={()=> swiper.slideNext()} style={{  padding: '6px 10px', backgroundColor: color,border: 'none', borderRadius: '10px', color: arrowColor, fontWeight: 'bold' }}>&#62;</button> 

        </div>
    )
}

export default SwiperButton