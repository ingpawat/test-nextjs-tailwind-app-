import React from 'react'
import { useState, useEffect } from 'react'
import { slideData } from './data/slide-data.js'

const Slider = () => {

    const [currentPreview, setCurrentPreview] = useState(0);

    const slideLength = slideData.length;
    // console.log(slideLength) 1, 2, 3, 4
    // console.log(currentPreview) 0, 1, 2, 3, 
    console.log(currentPreview)

    const autoSlide = true;
    let slideInterval;
    let interval = 5000;

    const nextSlide = () => {
        setCurrentPreview(currentPreview === slideLength - 1 ? 0 : currentPreview + 1);
    }

    function auto() {
        slideInterval = setInterval(nextSlide, interval);
    };


    useEffect(() => {
        setCurrentPreview(0)
    }, [])

    useEffect(() => {
        if (autoSlide){
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentPreview])

    return (
        < div className="h-[1000px] w-[100%] flex items-center justify-center" >
            <div className="container flex flex-col justify-center items-center w-[700px] h-[900px]  ">

                {/* Input images here */}
                <div className="image">
                    {slideData.map((item, index) => {
                        return (
                            <div className={index === currentPreview ? "slideCurrent" : "item"} key={index}>
                                {index === currentPreview && (
                                    <>
                                        <img src={item.img} alt='pics' />
                                        <div className='quote'>
                                            <p>{item.heading}</p>
                                            <p>{item.desc}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    })}

                </div>
            </div>
        </ div>
    )
}

export default Slider