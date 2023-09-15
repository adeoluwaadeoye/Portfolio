import React, { useState } from 'react'
import "./Header.css"
import logo from "../pic/logo.png"

const Header = () => {

    // when scroll header at top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })


    // toggle menu
    const [Mobile, setMobile] = useState(false)

    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <a href='#home'>
                            <img src={logo} alt='' />
                            <h2 className='logo-text'><span>C</span>odeWhirl</h2>
                        </a>

                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}>
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#features'>featrures</a>
                            </li>
                            <li>
                                <a href='#portfolio'>portfolio</a>
                            </li>
                            <li>
                                <a href='#resume'>resume</a>
                            </li>
                            <li>
                                <a href='#clients'>clients</a>
                            </li>
                            <li>
                                <a href='#blog'>blog</a>
                            </li>
                            <li>
                                <a href='#contact'>contact</a>
                            </li>
                            <li>
                                <button className='home-bt'>
                                    <a download="Adeoluwa-resume" href="https://www.dropbox.com/s/py9551mchwvyg1p/ADEOLUWA%20CV.pdf?dl=0" target="_blank"
                                        className="btn">Download CV
                                    </a>
                                </button>
                            </li>
                        </ul>
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header