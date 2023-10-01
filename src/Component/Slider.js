import React, {useState} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../foodData2.json";
import "./Slider.css";
import {Ally, Navigation, Pagination} from 'swiper'
import { useDispatch, useSelector } from "react-redux";
import SwiperButtono from './SliderButton'
import 'swiper/css/pagination'



export default function Slider() {
  const dispatch = useDispatch()
  const Data = useSelector((state)=>state.Data)


  const onAdd = (card, cardPrice, Portion)=>{

         
          dispatch({
            type: 'Add', 
            payload: card,
            price: cardPrice,
            portion: Portion,
            quantity: 1
    })
  }

  const removefromCart = (card, cardPrice)=>{
    dispatch({type: 'Remove',payload: card, price: cardPrice })
    
  }

  const card = {
    overflow: "hidden",
    padding: "2rem",

    // Hover styles
    ":hover": {
      backgroundColor: "black", // Change the background color on hover
    },
  };

  return (
    <section className="r-wrapper">
      <h1 style={{    margin: '1em 0em auto auto'}}>Biryani/Rice</h1>
      <hr />
      <div style={card}>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            726: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((card, i) =>
            card.CategoryName === "Biryani/Rice" ? (
              <SwiperSlide key={i}>
                <div
                  className="r-card"
                  style={{
                    gap: "0.6rem",
                    padding: "1rem",
                    border: "10px",
                    maxWidth: "max-content",
                    margin: "auto",
                    transition: "all 300ms ease-in",
                    backgroundColor: '#ff9c2b',
                    borderRadius: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '234px',
                    height: '308px'
                  }}
                >
                  <img
                    src={card.img}
                    style={{
                      width: "100%",
                      maxWidth: "15rem",
                      borderRadius: "2em",
                    }}
                    alt="Food Image"
                  />
                  <span className="secText">
                    <br />
                    <span>Half $</span>
                    <span>{card.options[0].half}</span>
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    <button onClick={()=>onAdd(card, card.options[0].half, 'half')}>+</button>
                    {"     "}
                    {"     "}
                    {"     "} <button onClick={()=>removefromCart(card)}>-</button>
                    <br />
                    <span>Full $</span>
                    <span>{card.options[0].full}</span>
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    <button onClick={()=>onAdd(card, card.options[0].full,'Full')}>+</button>
                    {"     "}
                    {"     "}
                    {"     "} <button onClick={()=>removefromCart(card)}>-</button>
                    <br />
                  </span>

                  <span className="primText">{card.name}</span>
                </div>
              </SwiperSlide>
            ) : null
          )}

          <SwiperButtono color= '#ff9c2b' arrowColor='black' />
        </Swiper>

      </div>

      <div style={{ overflow: "hidden", padding: "2rem" }}>
        <h1>Starter</h1>
        <hr />
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((card, i) =>
            card.CategoryName === "Starter" ? (
              <SwiperSlide key={i}>
                <div
                  className="r-card"
                  style={{
                    gap: "0.6rem",
                    padding: "1rem",
                    border: "10px",
                    maxWidth: "max-content",
                    margin: "auto",
                    transition: "all 300ms ease-in",
                    backgroundColor: '#352F44',
                    borderRadius: '2em',
                    color: 'white',
                    borderRadius: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '234px',
                    height: '308px'
                  }}
                >
                  <img
                    src={card.img}
                    style={{
                      width: "100%",
                      maxWidth: "15rem",
                      borderRadius: "2em",
                    }}
                    alt="Food Image"
                  />
                  <span className="secText">
                    <br />
                    <span>Half $</span>
                    <span>{card.options[0].half}</span>
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    <button style={{color: 'white'}} onClick={()=>onAdd(card, card.options[0].half,'half')}>+</button>
                    {"     "}
                    {"     "}
                    {"     "} <button style={{color: 'white'}} onClick={()=>removefromCart(card)}>-</button>
                    <br />
                    <span>Full $</span>
                    <span>{card.options[0].full}</span>
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    <button style={{color: 'white'}} onClick={()=>onAdd(card, card.options[0].full,'full')}>+</button>
                    {"     "}
                    {"     "}
                    {"     "} <button style={{color: 'white'}} onClick={()=>removefromCart(card)}>-</button>
                    <br />
                  </span>

                  <span className="primText">{card.name} </span>
                </div>
              </SwiperSlide>
            ) : null
          )}
          <SwiperButtono color = '#352F44' arrowColor = 'white' />
        </Swiper>
      </div>

      <div style={{ overflow: "hidden", padding: "2rem" }}>
        <h1>Pizza</h1>
        <hr />
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((card, i) =>
            card.CategoryName === "Pizza" ? (
              <SwiperSlide key={i}>
                <div
                  className="r-card"
                  style={{
                    gap: "0.6rem",
                    padding: "1rem",
                    border: "10px",
                    maxWidth: "max-content",
                    margin: "auto",
                    transition: "all 300ms ease-in",
                    backgroundColor:'#e7be197c',
                    borderRadius: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '234px',
                    height: '308px'
                  }}
                >
                  <img
                    src={card.img}
                    style={{
                      width: "100%",
                      maxWidth: "15rem",
                      borderRadius: "2em",
                    }}
                    alt="Food Image"
                  />
                 <span className="secText">
                    <br />
                    <span>Regular $</span>
                    <span>{card.options[0].regular}</span>
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    <button onClick={()=>onAdd(card, card.options[0].regular,'regular')}>+</button>
                    {"     "}
                    {"     "}
                    {"     "} <button onClick={()=>removefromCart(card)}>-</button>
                    <br />
                    <span>Medium $</span>
                    <span>{card.options[0].medium}</span>
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    <button onClick={()=>onAdd(card, card.options[0].medium,1, 'medium')}>+</button>
                    {"     "}
                    {"     "}
                    {"     "} <button onClick={()=>removefromCart(card)}>-</button>
                    <br />
                    <span>Large $</span>
                    <span>{card.options[0].large}</span>
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    {"     "}
                    <button onClick={()=>onAdd(card, card.options[0].large,'large')}>+</button>
                    {"     "}
                    {"     "}
                    {"     "} <button onClick={()=>removefromCart(card)}>-</button>
                  </span>
                  <span className="primText">{card.name}</span>
                </div>
              </SwiperSlide>
            ) : null
          )}
          <SwiperButtono color='#e7be197c' arrowColor='black'/>
        </Swiper>
      </div>
    </section>
  );
}
