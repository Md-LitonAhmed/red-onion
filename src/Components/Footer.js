import React from 'react';
import './Footer.css';
import image from '../images/icons/logo.png'

export default function Footer() {
    return (
        <div className='commonDiv'>
            <div className='footer'>

                <div className='imgDiv'>
                    <img style={{ height: '50px' }} src={image} />
                </div>

                <div className='detailsDiv'>
                    <ul>
                        <li><a href='#'>About Online Food</a></li>
                        <li><a href='#'>Read Our Blog</a></li>
                        <li><a href='#'>Sign Up to Deliver</a></li>
                        <li><a href='#'>Add your Restaurant</a></li>

                    </ul>
                </div>
                <div className='detailsDiv2'>
                    <ul>
                        <li><a href='#'>Get help</a></li>
                        <li><a href='#'>Read FAQS</a></li>
                        <li><a href='#'>View All cities</a></li>
                        <li><a href='#'>Restaurant near me</a></li>

                    </ul>
                </div>


            </div>
            <div className='lastDiv'>
                <div className='copy'>
                    <p>copyright@ 2023 Online Food </p>
                </div>
                <div className='privacy'>
                    <h6> Privacy Policy</h6>
                </div>
                <div className='terms'>
                    <h6>Terms Of Use</h6>
                </div>
                <div className='price'>
                    <h6>Pricing</h6>
                </div>

            </div>
        </div>
    )
}
