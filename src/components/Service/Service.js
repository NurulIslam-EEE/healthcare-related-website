
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Service.css';

const Service = (props) => {
    const { description, name, picture, _id } = props.service;
    return (
        <div className="col-md-4">
            <Card className='m-2 overflow-hidden m-md-3' style={{ width: '100%' }}>
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