import React, { useState,useEffect } from 'react'
import { CarouselData } from './CarouselData';
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa'

export const Carousel = ({slides, interval = 10000}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    useEffect(()=> {
        const next = (current + 1) % slides.length;
        const id = setTimeout(() => setCurrent(next), interval);
        return () => clearTimeout(id);
    }, [current]);

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }


    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet"></link>
            <div class="slider">
                <FaAngleLeft className="left-arrow" onClick={prevSlide}/>
                <FaAngleRight className="right-arrow" onClick={nextSlide} />
                <div className="indicator-holder">            
                    {CarouselData.map((slide, index) => (
                        <FaCircle onClick={() => setCurrent(index)} key={index} className={index === current ? 'indicator active' : 'indicator'}/>
                    ))}
                </div>
                {CarouselData.map((slide, index) => {
                    return (
                        <div>
                            <div className={index === current ? 'slide active' : 'slide'} key={index}> 
                                {index === current && (
                                    <img src={slide.image} alt="image" class="slide-image"/>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

