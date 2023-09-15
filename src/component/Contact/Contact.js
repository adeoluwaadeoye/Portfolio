import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        alert(
            `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
        )
    }
    return (
        <>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <h1>Contact Me</h1>
                        </div>
                    </div>

                    <div className='content d_flex'>
                        <div className='left'>
                            <div className='box box_shodow'>
                                <div className='img'>
                                    <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <img src={contact1} alt='' />
                                    </div>
                                </div>
                                <div className='details'>
                                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <h1>ADEOYE ADEOLUWA</h1>
                                    </div>
                                    <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <p>Chief Operating Officer</p>
                                    </div>
                                    <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                    </div>    <br />
                                    <div className="info_item padd-15">
                                        <p><span>Website : </span><a href="https://www.codewhirl.com.ng" target="_blank">www.codewhirl.com.ng</a></p>
                                    </div>
                                    <div className="info_item padd-15">
                                        <p><span>Email: </span><a href="mailto:codewhirl.dev@gmail.com"> codewhirl.dev@gmail.com</a></p>
                                    </div>
                                    <div className="info_item padd-15">
                                        <p><span>Degree</span> : Computer Science</p>
                                    </div>
                                    <div className="info_item padd-15">
                                        <p><span>Telephone: </span><a href="tel:+234-814-0898-790"> +234-814-0898-790</a></p>
                                    </div>
                                    <div className="info_item padd-15">
                                        <p><span>Location : </span>Lagos Nigeria</p>
                                    </div>
                                    <br />
                                    <span>FIND ME</span>
                                    <div className='button f_flex'>
                                        <button className='btn_shadow'>
                                            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                                <a href="https://github.com/CodeWhirl1" target="_blank">
                                                    <i className='fab fa-github'></i>
                                                </a>
                                            </div>
                                        </button>
                                        <button className='btn_shadow'>
                                            <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                                <a href="https://www.twitter.com/codewhirl" target="_blank">
                                                    <i class="fa-brands fa-x-twitter"></i>
                                                </a>
                                            </div>
                                        </button>
                                        <button className='btn_shadow'>
                                            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                                <a href="https://www.tiktok.com/@codewhirl" target="_blank">
                                                    <i className='fab fa-tiktok'></i>
                                                </a>
                                            </div>
                                        </button>
                                        <button className='btn_shadow'>
                                            <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                                <a href="https://www.linkedin.com/in/adeoyeadeoluwa" target="_blank" class="home_social-link">
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='right box_shodow'>
                            <form onSubmit={formSubmit}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                                    </div>
                                    <div className='input row'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <div data-aos="zoom-out-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <input type='email' name='email' value={data.email} onChange={InputEvent} />
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>SUBJECT </span>
                                    <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <div data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                                    </div>
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact