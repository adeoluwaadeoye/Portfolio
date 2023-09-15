import React from 'react';
import "./Home.css";
import hero from "../pic/mypic-1.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
    // Placeholder function for when typing is done
    const handleDone = () => {
        // Your code for when typing is done
    };

    // Placeholder function for when each character is typed
    const handleType = (text) => {
        // Your code for when each character is typed
    };

    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1>&#128075;, I'm <span>Adeoluwa.</span></h1>
                        <h2>
                            A
                            <span>
                                <Typewriter
                                    words={[' Web Developer ', ' Graphic Designer', '  Consultant.']}
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </span>
                        </h2>
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <p>I am a seasoned web developer, dedicated to the art of crafting visually mesmerizing and highly efficient websites. With a burning passion for innovation, I thrive on transforming concepts into captivating digital experiences.
                            </p>
                        </div>
                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND ME</h4>
                                <div data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <div className='button'>
                                        <button className='btn_shadow btn-flex'>
                                            <a href="https://www.facebook.com/adeoluwa.adeoye.90" target="_blank">
                                                <i className='fab fa-facebook-f'></i>
                                            </a>
                                        </button>
                                        <button className='btn_shadow btn-flex'>
                                            <a href="https://www.twitter.com/codewhirl" target="_blank">
                                                <i class="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </button>
                                        <button className='btn_shadow'>
                                            <a href="https://wa.me/+2348140898790" target="_blank" class="whatsapp-icon">
                                                <i className='fab fa-whatsapp'></i>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow btn-flex'>
                                    <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <img src={skill1} alt='' />
                                    </div>
                                </button>
                                <button className='btn_shadow btn-flex'>
                                    <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <img src={skill2} alt='' />
                                    </div>
                                </button>
                                <button className='btn_shadow btn-flex'>
                                    <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <img src={skill3} alt='' />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={hero} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Home;
