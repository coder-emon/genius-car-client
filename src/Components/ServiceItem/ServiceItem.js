import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { _id, title, img, price, } = service;
    return (
        <div className='flex flex-col justify-between space-y-4 p-4 rounded-xl border-2  border-gray-200   '>
            <img src={img} alt="" className='h-[208px] object-cover  rounded-xl' />
            <h2 className='text-black text-2xl font-semibold'>{title}</h2>
            <div className='flex justify-between items-center text-[#ff3811] text-xl font-semibold '><span>Price : ${price}</span> <Link to={`/checkout/${_id}`}><span className='cursor-pointer' ><FaArrowRight></FaArrowRight></span></Link></div>
        </div>
    );
};

export default ServiceItem;