import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { Id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails((data)))
    }, [Id]);

    const singleDetails = details.find(detail => detail?._id === Id);
    console.log(singleDetails);

    return (
        <div className='m-2 row'>
            <div className="col-md-6 details">
                <h1>{singleDetails?.name}</h1>

                <p>{singleDetails?.description}</p>

                <h5>Fee: {singleDetails?.fee}</h5>
                <button className='card-btn'>Join</button>
            </div>
            <div className="col-md-6">
                <img className='details-img' src={singleDetails?.picture} alt="" />
            </div>
        </div>
    );
};

export default ServiceDetails;