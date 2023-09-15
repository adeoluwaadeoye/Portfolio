import React, { useState } from "react";

const Card = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img src={props.image} alt='' onClick={toggleModal} />
                    </div>
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>
                    <label>
                        <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <i className='far fa-heart'></i> {props.totalLike}
                        </div>
                    </label>
                </div>
                <div className='title'>
                    <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <h2 onClick={toggleModal}>{props.title}</h2>
                    </div>
                    <a href={props.link} target="_blank" className='arrow'>
                        <i className='fas fa-arrow-right'></i>
                    </a>
                </div>
            </div>

            {/*===== Popup box=== */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>Featured - Design</span>
                            <h1>{props.title}</h1>
                            <p>
                                I'm thrilled to present the Web Development Showcase, a project
                                that not only exemplifies my proficiency in web development but
                                also underscores my relentless passion for pushing the boundaries
                                of creativity. This endeavor has been a labor of love, with
                                countless hours dedicated to crafting a digital masterpiece that
                                stands as a testament to meticulous coding and thoughtful design.
                            </p>
                            <div className='button f_flex mtop'>
                                <button className='btn_shadow'>
                                    LIKE THIS <i className='far fa-thumbs-up'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <a href={props.link} target="_blank">VIEW PROJECT</a>
                                    <i className='fas fa-chevron-right'></i>
                                </button>
                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i className='fas fa-times'></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
