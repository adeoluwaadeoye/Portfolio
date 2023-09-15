import React from "react"
import TestimonialApi from "./TestimonialApi"

const Slide = ({ id, image, design, name, offcer, post, date, desc, valueIndex, index }) => {
    let position = "nextSlide"
    if (valueIndex === index) {
        position = "activeSlide"
    }
    if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
        position = "lastSlide"
    }

    return (
        <>
            <article className={`d_flex ${position}`} key={id}>
                <div className='left box_shodow'>
                    <div className='img'>
                        <div data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div className='details mtop'>
                        <span className='primary_color'>{design}</span>
                        <h2>{name}</h2>
                        <label>{offcer}</label>
                    </div>
                </div>

                <div className='right'>
                    <div className='icon'>
                        <div className='quote'>
                            <i class="fa-solid fa-quote-right"></i>
                        </div>
                    </div>

                    <div className='content box_shodow mtop'>
                        <h1>{post}</h1>
                        <h3>{date}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Slide