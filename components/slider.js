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
    let interval = 10000;

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
        if (autoSlide) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentPreview])

    return (
        < div className="slideshow h-[1000px] w-[100%] flex items-center justify-center mt-0" >
            <div className="container flex flex-col justify-center items-center w-[100%] h-[900px]  ">

                {slideData.map((item, index) => {
                    return (
                        <div className={index === currentPreview ? "slideCurrent" : "item"} key={index} className="container  flex flex-col justify-center items-center">
                            {index === currentPreview && (
                                <>
                                    <div className='imgContain w-[auto] h-[auto] overflow-hidden '>
                                        <img src={item.img} alt='pics' className='img w-[500px]' />
                                    </div>

                                    <div className='quote'>
                                        <p className='mt-[2%] heading font-medium text-[30px] '>{item.heading}</p>
                                        <p className='mt-[2%] heading font-medium text-[20px]'>{item.desc}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}

            </div>
        </ div>
    )
}

export default Slider