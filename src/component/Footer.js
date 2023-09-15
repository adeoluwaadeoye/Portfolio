import React from 'react';
import logo from './pic/logo.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="about-me">
                    <h4>More About Me</h4>
                    <p>Hi there! I'm a passionate web developer with a love for creating beautiful and functional websites. My goal is to bring your ideas to life and make your online presence stand out.</p>
                </div>
                <div className="contact-info">
                    <h4>Contact Information</h4>
                    <p><i className="fa-solid fa-angle-right"></i><span>Email: </span><a href="mailto:codewhirl.dev@gmail.com">codewhirl.dev@gmail.com</a></p>
                    <p><i className="fa-solid fa-angle-right"></i><span>Telephone: </span><a href="tel:+234-814-0898-790">+234-814-0898-790</a></p>
                </div>
                <div className="social-icons">
                    <h4>Connect with Me</h4>
                    <a href="https://www.facebook.com/adeoluwa.adeoye.90" target="_blank" className="social-icon"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.twitter.com/codewhirl" target="_blank" className="social-icon"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/adeoyeadeoluwa" target="_blank" className="social-icon"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.tiktok.com/@codewhirl" target="_blank" className="social-icon"><i className="fab fa-tiktok"></i></a>
                    <a href="https://github.com/CodeWhirl1" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <a href="#"><img src={logo} alt="Logo" /></a>
                </div>
                <div className="footer-text">
                    <p className="copy-right" style={{ whiteSpace: 'nowrap' }}>© 2023 CodeWhirl. All rights reserved. <br /><span>Designed by <a href="https://www.facebook.com/adeoluwa.adeoye.90?mibextid=LQQJ4d" target="_blank">CodeWhirl</a></span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
