import React, { useState } from 'react'
import './Slider.css'

function Slider() {
    const imagePaths = ['/images/5.jpg', '/images/2.jpg', '/images/3.jpg','/images/4.jpg','/images/1.jpg'];
    const [currentIndex, setCorrentIndex] = useState(0);
    const handleNav = (value) => {
        console.log("value",value)
        setCorrentIndex((prev)=>{
            if(value===-1){
                return prev===0?imagePaths.length-1:prev-1
            }
            else{
                return prev===imagePaths.length-1?0:prev+1;

            }

        }
        )
    }


    return (
        <div className="sliderSection">
            <div className="slider">
                <div className="leftSlide navigate" onClick={() => handleNav(-1)}>
                    &lt;
                </div>
                <img src={imagePaths[currentIndex]} alt="Slide" className="sliderImage"  />
                <div className="rightSlider navigate " onClick={() => handleNav(+1)}>
                    &gt;
                </div>
            </div>
        </div>
    )
}

export default Slider