
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { description, name, picture, _id } = props.service;
    return (
        <div className="p-3 col-md-6 col-lg-4">
            <Card className='mt-3 overflow-hidden training-curd' style={{ width: '100%' }}>
                <img src={picture} alt="" className="card-img" />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 200)}......
                    </Card.Text>
                    <Link to={`/service/${_id}`}><button className='card-btn'>See Details</button></Link>



                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;