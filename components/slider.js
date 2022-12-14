import React from 'react'
import { slideData } from './data/slide-data.js'
import { useState, useEffect } from 'react'




const Slider = () => {

    const [currentPreview, setCurrentPreview] = useState(0);

    useEffect(() => {
        setCurrentPreview(0)
    }, [])

    useEffect(() => {

        let slideInterval;
        let interval = 8000;

        const slideLength = slideData.length;
        const autoSlide = true;


        const nextSlide = () => {
            setCurrentPreview(currentPreview === slideLength - 1 ? 0 : currentPreview + 1);
        }

       
        const auto = () => {
            slideInterval = setInterval(nextSlide, interval);
        };

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
                        <div className={index === currentPreview ? "slideCurrent" : "item"} key={index} >
                            {/* className="container  flex flex-col justify-center items-center" */}
                            {index === currentPreview && (
                                <div>
                                    <div className='imgContain flex justify-center items-center w-[100%] h-[700px] overflow-hidden '>
                                        <img src={item.img} alt='pics' className='img w-[700px] h-[auto] ' />
                                    </div>

                                    <div className='quote'>
                                        <p className='mt-[2%] heading font-medium text-[30px] '>{item.heading}</p>
                                        <p className='mt-[2%] heading font-medium text-[20px]'>{item.desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}

            </div>
        </ div>
    )
}

export default Slider