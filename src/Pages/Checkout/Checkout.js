import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Checkout.css"
import shape from "../../assets/images/checkout/shape.png"
import { AuthContext } from '../../Context/Auth.Context';
import { toast } from 'react-hot-toast';
const Checkout = () => {
    const { id } = useParams()
    const [service, setService] = useState()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data.data))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const number = form.number.value;
        const message = form.message.value
        const order = {
            service_id: service?._id,
            service_name: service?.title,
            price: service?.price,
            email: user?.email,
            customer_name: user?.displayName,
            message,
            number,
            img: service?.img
        }
        console.log(order)
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(data.message)
                form.reset()
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }
    return (
        <div className='w-4/5 mx-auto'>
            <div className='rounded checkout-bg my-2 '>
                <h1 className='text-5xl font-bold pt-14 px-20 text-white'>Check Out </h1>
                <div className='px-20 pb-10'>
                    <h3 className='text-xl text-white'><span className='text-purple-600'>Service Name:</span> {service?.title} </h3> <h3 className='text-xl text-white'> <span className='text-purple-600'>Price:</span> TK {service?.price}</h3>
                </div>
                <div className='flex justify-center relative'><img src={shape} alt="" className='mb-[-1px]' />
                    <h3 className='absolute top-[20%] text-white text-xl font-semibold '>Home/Checkout</h3>
                </div>
            </div>
            <div className='w-full bg-[#f3f3f3] rounded py-16'>
                <form className='w-4/5 mx-auto' onSubmit={handleSubmit}>
                    <div className='flex justify-center space-x-6'>
                        <input type="text" name="name" id="name" placeholder='Name' defaultValue={user?.displayName} readOnly className='bg-white border-2 rounded py-2 px-3 focus:outline-none border-transparent focus:ring-2 w-6/12' />
                        <input type="text" name="service_name" placeholder='Service Name' defaultValue={service?.title} readOnly className='bg-white border-2 rounded py-2 px-3 focus:outline-none border-transparent focus:ring-2 w-6/12' />
                    </div>
                    <div className='flex justify-center space-x-6 my-6'>
                        <input type="number" name="number" placeholder='Phone' className='bg-white border-2 rounded py-2 px-3 focus:outline-none border-transparent focus:ring-2 w-6/12' />
                        <input type="email" name="email" placeholder='Email' defaultValue={user?.email} className='bg-white border-2 rounded py-2 px-3 focus:outline-none border-transparent focus:ring-2 w-6/12' readOnly />
                    </div>
                    <textarea name="message" rows="5" className='w-full bg-white border-2 rounded py-2 px-3 focus:outline-none border-transparent focus:ring-2'></textarea>
                    <button className='w-full bg-[#FF3811] text-white text-xl py-1 rounded my-5
                    ' type='submit'>Confirm Order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;