import React from 'react';
import StartRating from '../StarRating/StartRating';

const ProductItem = ({ product }) => {
    const { title, img, price, } = product;
    return (
        <div className='flex flex-col justify-between items-center space-y-4 p-4 rounded-xl border-2  border-gray-200   '>
            <img src={img} alt="" className='h-[208px] object-cover  rounded-xl' />
            <h2 className='text-black text-2xl font-semibold'>{title}</h2>
            <div className='text-yellow-400'><StartRating stars={4}></StartRating></div>
            <div className='flex justify-center items-center text-[#ff3811] text-xl font-semibold '><span>Price : ${price}</span> </div>
        </div>
    );
};

export default ProductItem;