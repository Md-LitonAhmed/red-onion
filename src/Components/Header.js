import React from 'react'
import './Head.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Header() {
  return (
    <div  className='head' >
        <div>
        <h1>Best food waiting for your belly</h1>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3"
                    aria-label="Search"
                    
                  />
                  <Button  variant="danger" >Search</Button>
                </Form>
        </div>
    </div>
  )
}
