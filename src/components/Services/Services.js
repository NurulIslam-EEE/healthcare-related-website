import React from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useService();
    console.log(services);
    return (
        <div>

            <div className="m-0 row">
                <h1 className='p-3'>OUR TRAINING <span>COURSES</span> </h1>
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