import React from 'react';
import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div>
            <div className='flex justify-evenly items-center bg-[#151515] text-white w-4/5 mx-auto rounded py-20 my-6'>
                <div className='flex items-center space-x-4'>
                    <div><FaCalendarAlt className='text-3xl'></FaCalendarAlt></div>
                    <div>
                        <h4 className='text-sm'>We are open monday-friday</h4>
                        <h2 className='text-2xl'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <div><FaPhoneAlt className='text-3xl'></FaPhoneAlt></div>
                    <div>
                        <h4 className='text-sm'>Have a question?</h4>
                        <h2 className='text-2xl'>+2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex items-center space-x-4 '>
                    <div><FaLocationArrow className='text-3xl'></FaLocationArrow></div>
                    <div>
                        <h4 className='text-sm'>Need a repair? our address</h4>
                        <h2 className='text-2xl'>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;