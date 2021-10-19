import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { Id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails((data)))
    }, [Id])
    const singleDetails = details.find(detail => detail?._id === Id);
    console.log(singleDetails);
    return (
        <div className='m-2 row'>
            <div className="col-md-6 details">
                <h1>{singleDetails?.name}</h1>

                <p>{singleDetails?.description}</p>
            </div>
            <div className="col-md-6">
                <img className='details-img' src={singleDetails?.picture} alt="" />
            </div>
        </div>
    );
};

export default ServiceDetails;