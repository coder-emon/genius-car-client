import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='w-4/5 mx-auto py-16'>
            <div>
                <h3 className='text-[#ff3811] text-xl font-bold text-center'>Service</h3>
                <h2 className='text-5xl font-bold text-black text-center mb-5'>Our Service Area</h2>
                <p className='text-sm text-gray-400 leading-7 mb-5 text-center capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-3 gap-4 py-5'>
                {
                    services?.map(service => <ServiceItem key={service._id} service={service}></ServiceItem>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-[#ff3811] border-[#ff3811] border-2 rounded-md px-3 py-2'>More Services</button>
            </div>
        </div>
    );
};

export default Services;