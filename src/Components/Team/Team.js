import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import img1 from "../../assets/images/team/1.jpg"
import img2 from "../../assets/images/team/2.jpg"
import img3 from "../../assets/images/team/3.jpg"
const Team = () => {
    return (
        <div className='w-4/5 mx-auto py-16'>
            <div>
                <h3 className='text-[#ff3811] text-xl font-bold text-center'>Team</h3>
                <h2 className='text-5xl font-bold text-black text-center mb-5'>Meet Our Team</h2>
                <p className='text-sm text-gray-400 leading-7 mb-5 text-center capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-3 gap-4 py-5'>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img1} alt="" className='w-[314px] h-[293px]   object-cover  object-center rounded-xl' />
                    <h2 className='text-black text-2xl font-semibold'>Car Engine Plug</h2>

                    <div className='flex justify-center items-center  text-sm text-gray-500 font-semibold '><span>Engine Expert</span> </div>
                    <div className='flex justify-center items-center space-x-2' >
                        <span className='w-10 h-10 rounded-full bg-[#395185] text-white flex justify-center items-center '><FaFacebookF className=' text-2xl'></FaFacebookF></span>
                        <span className='w-10 h-10 rounded-full text-white bg-[#55ACEE] flex justify-center items-center'><FaTwitter className='   text-xl'></FaTwitter></span>
                        <span className='w-10 h-10 rounded-full text-white bg-[#0A66C2] flex justify-center items-center'><FaLinkedinIn className=' text-2xl '></FaLinkedinIn></span>
                        <span className='w-10 h-10 rounded-full text-white bg-gradient-to-br from-[#9748BE] to-[#F08053]  flex justify-center items-center'><FaInstagram className='  text-2xl'></FaInstagram></span>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img2} alt="" className='w-[314px] h-[293px]   object-cover  object-center rounded-xl' />
                    <h2 className='text-black text-2xl font-semibold'>Car Engine Plug</h2>

                    <div className='flex justify-center items-center  text-sm text-gray-500 font-semibold '><span>Engine Expert</span> </div>
                    <div className='flex justify-center items-center space-x-2' >
                        <span className='w-10 h-10 rounded-full bg-[#395185] text-white flex justify-center items-center '><FaFacebookF className=' text-2xl'></FaFacebookF></span>
                        <span className='w-10 h-10 rounded-full text-white bg-[#55ACEE] flex justify-center items-center'><FaTwitter className='   text-xl'></FaTwitter></span>
                        <span className='w-10 h-10 rounded-full text-white bg-[#0A66C2] flex justify-center items-center'><FaLinkedinIn className=' text-2xl '></FaLinkedinIn></span>
                        <span className='w-10 h-10 rounded-full text-white bg-gradient-to-br from-[#9748BE] to-[#F08053]  flex justify-center items-center'><FaInstagram className='  text-2xl'></FaInstagram></span>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center space-y-2 p-4 rounded-xl border-2  border-gray-200   '>
                    <img src={img3} alt="" className='w-[314px] h-[293px]   object-cover  object-center rounded-xl' />
                    <h2 className='text-black text-2xl font-semibold'>Car Engine Plug</h2>

                    <div className='flex justify-center items-center  text-sm text-gray-500 font-semibold '><span>Engine Expert</span> </div>
                    <div className='flex justify-center items-center space-x-2' >
                        <span className='w-10 h-10 rounded-full bg-[#395185] text-white flex justify-center items-center '><FaFacebookF className=' text-2xl'></FaFacebookF></span>
                        <span className='w-10 h-10 rounded-full text-white bg-[#55ACEE] flex justify-center items-center'><FaTwitter className='   text-xl'></FaTwitter></span>
                        <span className='w-10 h-10 rounded-full text-white bg-[#0A66C2] flex justify-center items-center'><FaLinkedinIn className=' text-2xl '></FaLinkedinIn></span>
                        <span className='w-10 h-10 rounded-full text-white bg-gradient-to-br from-[#9748BE] to-[#F08053]  flex justify-center items-center'><FaInstagram className='  text-2xl'></FaInstagram></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;