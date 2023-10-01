/*import React from 'react';
import Data from '../foodData2.json';

export default function Card() {


  return (
    <div>
      <h1>Baryani Rice</h1> 
      <div className="Baryani-Rice">
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8em', justifyContent: 'center'}}>
      {Data.map((item, index) => (
        item.CategoryName === 'Biryani/Rice'   ? (
        <div key={index} className="card" style={{ width: '12rem' }}>
          <img src={item.img} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Half Price: {item.options[0].half}</p>
            <p className="card-text">Full Price: {item.options[0].full}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>)
      : (<div></div>))) }
      </div>
    </div>

    <h1> Starter </h1>
    <div className="starter" >
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8em', justifyContent: 'center'}}>
      {Data.map((item, index) => (
        item.CategoryName === 'Starter'   ? (
        <div key={index} className="card" style={{ width: '12rem' }}>
          <img src={item.img} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Half Price: {item.options[0].half}</p>
            <p className="card-text">Full Price: {item.options[0].full}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>)
      : (<div></div>))) }
      </div>
    </div>

    <h1>Pizza</h1>
    
    <div className="pizza">
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8em', justifyContent: 'center'}}>
      {Data.map((item, index) => (
        item.CategoryName === 'Pizza'   ? (
        <div key={index} className="card" style={{ width: '12rem' }}>
          <img src={item.img} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Half Price: {item.options[0].half}</p>
            <p className="card-text">Full Price: {item.options[0].full}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>)
      : (<div></div>))) }
      </div>
    </div>





    </div>
  );
}

*/
