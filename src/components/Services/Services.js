import React, { useEffect, useState } from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useService();
    console.log(services);
    return (
        <div>
            <h1>OUR TRAINING <span>COURSES</span> </h1>
            <div className="m-5 row">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)

                }
            </div>

        </div>
    );
};

export default Services;