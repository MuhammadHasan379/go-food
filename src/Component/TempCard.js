import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Data from '../foodData2.json'


export default function TempCard({Data}) {

    const dispatch = useDispatch()

    const ADD = (card)=>{
        dispatch({type: 'Add', payload: card})
        
    }

    const Remove = (card)=>{
        dispatch({type: 'Remove', payload: card})
    }



  return (


    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        
        { 
            Data.map((Card) =>(
                <div className="card" style={{width: '18rem'}}>
                <img src= {Card.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{Card.name}</h5>
                    <p className="card-text">{Card.options[0].half}</p>
                    <button classNameName="Add" onClick={()=>ADD(Card)}>+</button>
                    <button classNameName="Remove" onClick={()=>Remove(Card)}>-</button>
                    <p className="card-text">{Card.options[0].full}</p>
                    <button classNameName="Add" onClick={()=>ADD(Card)}>+</button>
                    <button classNameName="Remove" onClick={()=>Remove(Card)}>-</button>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>

            ))

        }
    </div>
  )
}
