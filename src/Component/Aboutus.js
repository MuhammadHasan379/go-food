import React from 'react'
import './Aboutus.css'
export default function Aboutus() {
  return (
    <section style={{overflow: 'hidden'}}>
        <h1 style={{margin: '2em 1em auto auto'}}> About us</h1>
        <hr />
    <div className="about-wrapper">
        
        <div className="aboutsection1" style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div className="image">
                <img src="https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="content">
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ullam incidunt quod dolores consequatur distinctio recusandae omnis praesentium, iusto reprehenderit!</p>
            </div>
  </div>

        <div className="aboutsection2">
        <div className="content">
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ullam incidunt quod dolores consequatur distinctio recusandae omnis praesentium, iusto reprehenderit!</p>
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/1269665/pexels-photo-1269665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
        <div className="aboutsection3">
            <div className="image">
                <img src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="content">
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ullam incidunt quod dolores consequatur distinctio recusandae omnis praesentium, iusto reprehenderit!</p>
            </div>
        </div>

    </div>
    </section>
  )
}
