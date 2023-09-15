import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow'>
                <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src={props.image} alt='' />
                </div>
                <h2>{props.title}</h2>
                <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <p>{props.desc}</p>
                </div>

                <a href=''>
                    <i className='fas fa-arrow-right'></i>
                </a>
            </div>
        </>
    )
}

export default Card