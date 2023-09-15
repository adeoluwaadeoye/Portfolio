import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import Slide from "./Slide"
import TestimonialApi from "./TestimonialApi"

const Testimonial = () => {
    const [data, setdata] = useState(TestimonialApi)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = data.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, data])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 6000)
        return () => clearInterval(slider)
    }, [index])

    return (
        <>
            <section className='Testimonial' id='clients'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h4>WHAT CLIENTS SAY</h4>
                        <h1>Testimonial</h1>
                    </div>
                    <div className='slide'>

                        {data.map((value, valueIndex) => {
                            return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
                        })}

                        <div className='slide_button'>
                            <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                                <i class='fas fa-arrow-left'></i>
                            </button>
                            <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                                <i class='fas fa-arrow-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial