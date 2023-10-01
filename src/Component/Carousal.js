import { useState, useEffect, useRef } from "react";

const Carousal = ({images}) =>{

    const setIntervalID = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () =>{
        setCurrentIndex(((currentIndex+1)%images.length))
    }
    useEffect(()=>{
      setIntervalID.current=setInterval(handleNext, 4000)
      return() => {
        clearInterval(setIntervalID.current)
      }
    })


    const button1 = {
        border: 'none',
        background: 'blue',
        color: 'white',
        fontSize: '15px',
        fontWeight: 'bold',
        padding: '6px 8px',
        borderRadius: '12px'
        }
    
        const searchbar = {
        border: 'none',
        background: '#e7e1e1',
        borderRadius: '13px',
        color: 'black',
        fontSize: '14px'
        }

        const search = {
            width: '48vw',
            height: '13vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: '-9em auto',
        }

        const button = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '-16em 1em',
            padding: '1 em', 
            border: 'none', 
            background: 'none',
        }



    return(
        <div className="Carousel-wrapper" style={{border: '2px solid black', height: '70vh', width: '100vw',  overflow: 'hidden'}} >
            <img src={images[currentIndex]} alt="image" style={{width: '100%', height: '100%', border: 'none', objectFit: 'cover'}} />
            {console.log(currentIndex)}
        </div>

    )

}


/*
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
        <img
          key={currentIndex}
          src={images[currentIndex]}
        /><div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
*/

export default Carousal;
