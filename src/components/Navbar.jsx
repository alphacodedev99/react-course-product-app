import React from 'react'
import navbarlogo from '../assets/navbarimg.png';
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";


function Navbar() {
    return (
        <div className='bg-[#003F62]'>
            <div className='container mx-auto w-full h-[100px] flex items-center justify-between'>


                {/* logo & input */}
                <div className='flex gap-[20px] items-center'>
                    <img src={navbarlogo} alt="logo-navbar" className='h-[50px]' />

                    <div className='bg-white rounded-[20px] flex' >
                        <input type="text" placeholder='Search Products' className='p-[10px] rounded-[20px]' />
                        <button className='bg-[#EDA415] px-[12px] py-[6px] text-white rounded-[20px]'>Search</button>
                    </div>
                </div>


                {/* login section */}
                <div className='flex gap-[10px]'>
                    <div className='flex gap-[2px] items-center'>
                        <FaRegHeart color='white' size={25} className='cursor-pointer' />
                        <span className='text-[#EDA415]'>SignIn</span>
                    </div>
                    <div className='flex gap-[2px] items-center'>
                        <FaShoppingCart color='white' size={25} className='cursor-pointer' />
                        <span className='text-[#EDA415]'>SignIn</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar