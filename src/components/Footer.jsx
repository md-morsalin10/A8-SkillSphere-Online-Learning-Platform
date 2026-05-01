import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10 bg-base-200'>
           
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 py-10 px-5'>
                
                
                <div className='col-span-1 md:col-span-6 space-y-5'>
                    <h2 className='text-2xl font-bold text-[#4F46E5]'>SkillSphere</h2>
                    <p className='text-[#464555] text-lg max-w-md'>
                        Revolutionizing online education through immersive, expert-led courses and modern learning methodologies.
                    </p>
                </div>

                <div className='col-span-1 md:col-span-3 flex flex-col md:items-center'>
                    <ul className='text-[#464555] text-sm space-y-2'>
                        <h2 className='text-[#0B1C30] font-bold mb-3 uppercase tracking-wider'>Company</h2>
                        <li className="hover:text-[#4F46E5] cursor-pointer transition-colors">Terms of Service</li>
                        <li className="hover:text-[#4F46E5] cursor-pointer transition-colors">Privacy Policy</li>
                        <li className="hover:text-[#4F46E5] cursor-pointer transition-colors">Contact Us</li>
                    </ul>
                </div>

                
                <div className='col-span-1 md:col-span-3 flex flex-col md:items-center'>
                    <ul className='text-[#464555] text-sm space-y-2'>
                        <h2 className='text-[#0B1C30] font-bold mb-3 uppercase tracking-wider'>Connect</h2>
                        <li className="hover:text-[#4F46E5] cursor-pointer transition-colors">LinkedIn</li>
                        <li className="hover:text-[#4F46E5] cursor-pointer transition-colors">Twitter</li>
                        <li className="hover:text-[#4F46E5] cursor-pointer transition-colors">Facebook</li>
                    </ul>
                </div>
            </div>

            <hr className='opacity-10 container mx-auto' />
            
            <div className='text-center py-6'>
                <p className='text-gray-500 text-sm'>
                    © {new Date().getFullYear()} SkillSphere. Empowering learners worldwide.
                </p>
            </div>
        </div>
    );
};

export default Footer;