import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc"
import { Link } from 'react-router-dom';
import image from "../../assets/images/login/login.svg"
import { AuthContext } from '../../Context/Auth.Context';
const Register = () => {
    const { setUser, googleSignIn, setLoading, signUp, updateUser } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result => {
                const user = result.user
                setUser(user)
                console.log(user)
                setLoading(false)
            })).catch((error) => { console.log(error.message); })
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value
        signUp(email, password)
            .then((result) => {
                const user = result.user
                updateUser(name)
                    .then(() => {
                        alert('User updated');
                    })
                    .catch(err => {
                        console.log(err);
                    })
                setUser((user))
                console.log(user)
                toast.success(`${user.displayName} User Created Successfully`)
                setLoading(false)
                form.reset()
            })
            .catch((err) => {
                console.log(err)
                toast.error(err.message)
            })
    }
    return (
        <div className='flex justify-between items-center space-x-8 w-4/5 mx-auto py-16'>
            <div className='w-2/5 text-left'>
                <img src={image} alt="" className='w-11/12' />
            </div>
            <div className='w-3/6 flex justify-center items-center border-2 rounded-md py-12 '>
                <form className='flex flex-col justify-center items-center w-4/5 ' onSubmit={handleSignUp}>
                    <h2 className='text-4xl font-semibold my-6'>Register</h2>
                    <div className='w-full'>
                        <label htmlFor='name' className='font-semibold'>Name</label>
                        <input type="text" name="name" id="name" className='w-full py-2 px-3 rounded-md border-2 focus:border-transparent focus:outline-none focus:ring-2 mt-2' placeholder='Name' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor='email' className='font-semibold'>Email</label>
                        <input type="email" name="email" id="email" className='w-full py-2 px-3 rounded-md border-2 focus:border-transparent focus:outline-none focus:ring-2 mt-2' placeholder='Email' />
                    </div>
                    <div className='w-full mt-4'>
                        <label htmlFor='password' className='font-semibold'>Password</label>
                        <input type="password" name="password" id="password" className='w-full py-2 px-3 rounded-md border-2 focus:border-transparent focus:outline-none focus:ring-2 mt-2' placeholder='Password' />
                    </div>
                    <button className='bg-[#ff3811] text-white w-full rounded-md py-2 mt-5' >Sign Up</button>
                    <h4 className='my-4 text-sm font-semibold'>Or Sign In With</h4>
                    <div className='flex justify-center items-center space-x-3 mb-6 '>
                        <span className='bg-[#F5F5F8] w-10 h-10 text-xl rounded-full flex justify-center items-center text-[#3B5998] cursor-pointer'><FaFacebookF></FaFacebookF></span>
                        <span className='bg-[#F5F5F8]  w-10 h-10 text-xl rounded-full flex justify-center items-center  text-[#0A66C2] cursor-pointer'><FaLinkedinIn></FaLinkedinIn></span>
                        <span className='bg-[#f5f5f5] w-10 h-10 text-xl rounded-full flex justify-center items-center  cursor-pointer' onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></span>
                    </div>
                    <p className='text-xl '>Have a account <Link to="/login" className='text-[#ff3811] font-semibold'>Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;