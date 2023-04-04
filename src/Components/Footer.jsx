import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='sb__footer section__padding'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links_div'>
                        <h4>Home</h4>
                        <a href='/'>
                            <p>Home Page</p>
                        </a>
                    </div>
                </div>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links_div'>
                        <h4>Shop</h4>
                        <a href='/Shop'>
                            <p>Shop Products</p>
                        </a>
                    </div>
                </div>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links_div'>
                        <h4>Contact</h4>
                        <a href='/Contact'>
                            <p>Contact Us</p>
                        </a>
                    </div>
                </div>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links_div'>
                        <h4>Coming Soon on</h4>
                        <div className='socialmedia'>
                        <SocialIcon network="facebook" url="https://facebook.com" />
                        <SocialIcon network="twitter" url="https://twitter.com" />
                        <SocialIcon network="instagram" url="https://instagram.com" />
                        <SocialIcon network="linkedin" url="https://linkedin.com" />
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='sb__footer-below'>
                    <div className='sb__footer-copywrite'>
                        <p>
                            @{new Date().getFullYear()} Valid. All Rights Reserved by Alvaro Rodriguez-Salas
                        </p>
                    </div>
                    <div className='sb__footer-below-links'>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                        <a href='/privacy'><div><p>Privacy</p></div></a>
                        <a href='/security'><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}