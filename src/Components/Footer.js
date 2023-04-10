import React from 'react';
import './Footer.css'
import FooterCard from './FooterCard';
import FooterData from '../FooterData.json';

export default function Footer() {
    return (
        <div className='container'>
            <div>
                <h2>Why you chooose us</h2>
                <p>Red Onion Won Two Awards In The Best Retailer Restaurant And Best Retail Campaign Category.</p>
            </div>

            <div className='footer'>
                {
                    FooterData.map(data => <FooterCard data={data}></FooterCard>)
                }
            </div>


        </div>
    )
}
