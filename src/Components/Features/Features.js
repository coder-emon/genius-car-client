import React from 'react';
import img1 from "../../assets/images/features/people.png"
import img2 from "../../assets/images/features/watch.png"
import img3 from "../../assets/images/features/support.png"
import img4 from "../../assets/images/features/wrench.png"
import img5 from "../../assets/images/features/security.png"
import img6 from "../../assets/images/features/delevery.png"
const Features = () => {
    return (
        <div className='w-4/5 mx-auto py-16'>
            <div>
                <h3 className='text-[#ff3811] text-xl font-bold text-center'>Core Features</h3>
                <h2 className='text-5xl font-bold text-black text-center mb-5'>Why Choose Us</h2>
                <p className='text-sm text-gray-400 leading-7 mb-5 text-center capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-6 gap-4 py-5'>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img1} alt="" className='h-[53px] object-cover  object-center rounded-xl' />
                    <div className='flex justify-center items-center  text-xl  font-semibold '><span>Engine Expert</span> </div>
                </div>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-transparent bg-[#ff3811]  '>
                    <img src={img2} alt="" className='h-[53px] object-cover  object-center rounded-xl' />
                    <div className='flex justify-center items-center  text-xl  font-semibold text-white'><span>Timely Delivery</span> </div>
                </div>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img3} alt="" className='h-[53px] object-cover  object-center rounded-xl' />
                    <div className='flex justify-center items-center  text-xl  font-semibold '><span>24/7 Support</span> </div>
                </div>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img4} alt="" className='h-[53px] object-cover  object-center rounded-xl' />
                    <div className='flex justify-center items-center  text-xl  font-semibold '><span>Best Equipment</span> </div>
                </div>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img5} alt="" className='h-[53px] object-cover  object-center rounded-xl' />
                    <div className='flex justify-center items-center  text-xl  font-semibold '><span>100% Guranty</span> </div>
                </div>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img6} alt="" className='h-[53px] object-cover  object-center rounded-xl' />
                    <div className='flex justify-center items-center  text-xl  font-semibold '><span>Timely Delivery</span> </div>
                </div>
            </div>

        </div>
    );
};

export default Features;