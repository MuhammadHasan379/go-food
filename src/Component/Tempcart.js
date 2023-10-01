import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './TempCart.css'

export default function Tempcart() {
  const Amount = useSelector((state)=>state.price);
  let qty = 0
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Data);
  const removefromCart = (card, cardprice, cardoption) => {
    console.log(Data)
    dispatch({ type: "Remove", payload: card, price: cardprice, option: cardoption });
  };
 
  const add = (card, cardprice, cardoption)=>{

    dispatch({
      type: 'AddUpdate',
      payload: card,
      price: cardprice,
      option: cardoption
    })

  }

  const reset = ()=>{
    dispatch({
      type: 'Reset state'
    })
  }



  return (
    <div >
      <div className="ParentWrapper"

      >
        <div className="CartDetails">
          <div
            className="cart"
            style={{
              backgroundColor: "white",
              padding: "1em",
              borderRadius: "1em",
              textAlign: "center",
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            {" "}
            Shopping Cart
          </div>
          <div className="cartItems" style={{maxheight: "16vh",
    overflowY: 'auto'}}>
            {Data.map((card) => (
              <div style={{maxheight: "16vh",
              overflowY: 'auto', overflowX: 'hidden' }}>
                <div
                  className="pricecart"
                 
                >
                  <div className="cart" style={{ width: "23%", height: "93%" }}>
                    <img style={{ borderRadius: "2em"}} src={card.img}></img>
                  </div>
                  <div className="info" style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'space-evenly', height: '50%'}}>
                  <div className="car" style={{fontSize: 'calc(13px + 0.5vw)'}}>{card.name}</div>
                  <div className="size" style={{fontSize: 'calc(13px + 0.5vw)'}}>{card.option}</div> 
                  </div> 
                  <div className="price" style={{fontSize: 'calc(13px + 0.5vw)'}}>${card.price}</div>
                  <div className="increasedeacreas" style={{display: 'flex', justifyContent: 'space-evenly', width: '26%'}}>
                  <button
                    className="RemoveFromCart"
                    onClick={() => removefromCart(card, card.price, card.option)}
                    style={{
                      border: "none",
                      borderRadius: "1em",
                      padding: "0.2em 0.5em",
                    }}
                  >
                    -
                  </button>
                  <div className="quantity">{card.quantity}</div>
                  <button onClick={()=> add(card, card.price, card.option)} style={{
                      border: "none",
                      borderRadius: "1em",
                      padding: "0.2em 0.5em",
                    }} >+</button>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>

        <div className="shoppingAdress">
          <div className="Summary" style={{ textAlign: "center" }}>
            <h1>Summary</h1>
          </div>
          <hr />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {
              Data.map((item)=>{
                qty = qty + parseFloat(item.quantity)
              })}  
            <h5 >Products:</h5> <h5 style={{margin: '0em 1.5em'}}>    {qty}</h5>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h5 >Shipping:</h5>  <h5 style={{margin: '0em 1.5em'}}>   Free</h5>
          </div>
          <h3 style={{ float: "left" }}>Total Amount</h3>
          <h3 style={{ float: "right", marginRight: "1em" }}>{Amount}</h3>
        </div>
      </div>
    </div>
  );
}
