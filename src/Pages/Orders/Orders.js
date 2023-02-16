import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { AuthContext } from '../../Context/Auth.Context';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        if (user.email == "admin@gmail.com") {
            fetch("http://localhost:5000/orders")
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setOrders(data.data)
                    setRefresh(false)
                })
                .catch(err => console.error(err))
        } else {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setOrders(data.data)
                    setRefresh(false)
                })
                .catch(err => console.error(err))
        }
    }, [refresh, user.email])
    const handleAproved = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    toast.success(data.message)
                    setRefresh(true)
                }
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.success) {
                        toast.success(data.message)
                        setRefresh(true)
                    }

                })
        }
    }
    return (
        <div className='w-4/5 mx-auto'>
            <div className='rounded checkout-bg my-2 py-10'>
                <h1 className='text-5xl font-bold pt-14 px-20 text-white'>Mange All Orders </h1>
                <div className='px-20 pb-10'>
                    <h3 className='text-xl text-white'><span className='text-purple-600'>Home / Manage All Orders</span>  </h3>
                </div>
            </div>
            <div>
                {
                    orders?.map(order => <div key={order._id} className="flex justify-between items-center mb-3 border-gray-400 border rounded p-2">
                        <span className='cursor-pointer' onClick={() => handleDelete(order._id)}><RxCross2 className='text-3xl'></RxCross2></span>
                        <img src={order.img} alt={order.service_name} className="w-20" />
                        <h2 className='text-2xl'>{order.service_name}</h2>
                        <p className='text-xl '>${order.price}</p>
                        <p className='text-xl'>{order.email}</p>
                        <p className='text-xl'>{order.customer_name}</p>
                        <button className=' ' onClick={() => handleAproved(order._id)}>{order?.status ? <span className='bg-transparent border-[#29B170] border-2 px-3 py-1 text-[#29B170] rounded'>Aproved</span> : <span className='bg-[#ff3811]  px-3 py-1 text-white rounded'>Pending</span>}</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Orders;