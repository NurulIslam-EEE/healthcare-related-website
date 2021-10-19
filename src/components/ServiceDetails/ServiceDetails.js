import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';

const ServiceDetails = () => {
    const { services } = useService();
    const { Id } = useParams();
    return (
        <div>
            <h1>{Id}</h1>
        </div>
    );
};

export default ServiceDetails;