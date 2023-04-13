import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';

export default function Cart(props) {
    const { name, category, img, description, price } = props.food;
    return (
        <div className='container'>
            <Card style={{ width: '20rem', height:'32rem' }}>
                <div>
                <Card.Img variant="top" src={img} />
                </div>
                <div>
                <Card.Body>
                    <Card.Title id='name'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <br />
                        <p id='price'>Price: {price}$</p>
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>

        </div>
    )
}
