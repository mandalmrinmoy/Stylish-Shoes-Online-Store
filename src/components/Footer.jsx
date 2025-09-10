import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 gap-4 border-t-1 border-t-gray-300 mt-20 py-10'>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-2xl text-gray-800'>Info</p>
                    <div className='flex flex-col gap-2 text-lg'>
                    <p>Track Your Order</p>
                    <p>Our Blog</p>
                    <p>Privacy policy</p>
                    <p>Shipping</p>
                    <p>Contact Us</p>
                    <p>Help</p>
                    <p>Community</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-2xl text-gray-800'>About</p>
                    <div className='flex flex-col gap-2 text-lg'>
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Services</p>
                    <p>Company</p>
                    <p>Manufacture</p>
                    <p>Wholesale</p>
                    <p>Retail</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-2xl text-gray-800'>Women Shoes</p>
                    <div className='flex flex-col gap-2 text-lg'>
                        <p>Track Your Order</p>
                        <p>Our Blog</p>
                        <p>Privacy policy</p>
                        <p>Shipping</p>
                        <p>Contact Us</p>
                        <p>Help</p>
                        <p>Community</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-2xl text-gray-800'>Popular</p>
                    <div className='flex flex-col gap-2 text-lg'>
                        <p>Prices Drop</p>
                        <p>New Products</p>
                        <p>Best Sales</p>
                        <p>Stores</p>
                        <p>Login</p>
                        <p>Cart</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-2xl text-gray-800'>Mens Collection</p>
                    <div className='flex flex-col gap-2 text-lg'>
                        <p>Delivery</p>
                        <p>About Us</p>
                        <p>Shoes</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-2xl text-gray-800'>Get In Touch</p>
                    <div className='flex flex-col gap-2 text-lg'>
                        <p>Stylish Online Store 123 Main Street, Toulouse - France.</p>
                        <p>Call us: (+33) 800 456 789-987</p>
                        <p>contact@yourwebsite.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer