import React from 'react'
import { SliderData } from './SliderData'
import { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
    
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1: current - 1)
    }

    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return (
    // <div>Images</div>
    <div className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} ></FaArrowAltCircleLeft>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} ></FaArrowAltCircleRight>
        {
            SliderData.map((slide, index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="landscape" className="image" />)}
                        

                    </div>
                )
            })
        }

    </div>
  )
}

export default ImageSlider