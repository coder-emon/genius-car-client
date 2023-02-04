import React from 'react';
import image1 from "../../assets/images/about_us/person.jpg"
import image2 from "../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 w-4/5 mx-auto py-16'>
                <div className='relative h-[520px]'>
                    <img src={image1} alt="" className='absolute w-[460px] h-[460px] object-cover object-left rounded' />
                    <img src={image2} alt="" className='absolute right-5 bottom-2  w-[332px] h-[327px] object-cover border-8 border-white rounded' />
                </div>
                <div className='flex flex-col space-y-8 items-start w-5/6'>
                    <h3 className='text-[#ff3811] text-xl font-bold'>About Us</h3>
                    <h2 className='text-5xl font-bold text-black'>We are qualified <br /> & of experience <br /> in this field</h2>
                    <div>
                        <p className='text-sm text-gray-400 leading-7 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-sm text-gray-400 leading-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <button className='bg-[#ff3811] text-white px-3 py-2 rounded'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;