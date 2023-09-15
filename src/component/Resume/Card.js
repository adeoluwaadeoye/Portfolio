import React from "react"

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow'>
                <div className='title_content d_flex'>
                    <div className='title'>
                        <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <h2>{props.title}</h2>
                        </div>
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <span>{props.year}</span>
                        </div>
                    </div>
                    <div className='rate'>
                        <button className='btn_shadow '>{props.rate}</button>
                    </div>
                </div>
                <hr />
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default Card