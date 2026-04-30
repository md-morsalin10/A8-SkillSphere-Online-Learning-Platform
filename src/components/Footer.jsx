import React from 'react';


const Footer = () => {
    return (
        <div className=' mt-10 bg-base-200'>
            <div className='container mx-auto grid grid-cols-12 gap-2 py-4'>
                <div className='col-span-3 lg:col-span-6  p-2 space-y-5'>
                    <h2 className='text-xl font-bold text-[#4F46E5]'>SkillSphere</h2>
                    <p className='text-[#464555] text-lg'>Revolutionizing online education through
                        immersive, expert-led courses and modern
                        learning methodologies.</p>
                </div>

             

                <div className='col-span-3  flex flex-col justify-center items-center'>

                    <ul className='text-[#464555] text-sm'>
                        <h2 className='text-[#0B1C30] font-bold'>COMPANY</h2>
                        <li>TERMS OF SERVICE</li>
                        <li>PRIVACY POLICY</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>

                <div className='col-span-3  flex flex-col justify-center items-center'>

                    <ul className='text-[#464555] text-sm'>
                        <h2 className='text-[#0B1C30] font-bold'>CONNECT</h2>
                        <li>LINKEDIN</li>
                        <li>TWITTER</li>
                        <li>FACEBOOK</li>
                    </ul>
                </div>
            </div>
            <hr className='opacity-10 pt-2 container mx-auto' />
            <div className='text-center py-4'>
                <p className='text-gray-500 text-sm'>© 2024 SkillSphere. Empowering learners worldwide.</p>
            </div>
        </div>
    );
};

export default Footer;