import React from 'react';
import './Service.css'
import FooterCard from './FooterCard';
import FooterData from '../FooterData.json';

export default function Service() {
    return (
        <div className='container'>
            <div>
                <h2>Why you chooose us</h2>
                <p>Red Onion Won Two Awards in The Best Retailer Restaurant And Best Retail Campaign Category.</p>
            </div>

            <div className='service'>
                {
                    FooterData.map(data => <FooterCard data={data}></FooterCard>)
                }
            </div>


        </div>
    )
}
