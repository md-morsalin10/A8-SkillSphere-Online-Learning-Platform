import Image from 'next/image';
import React from 'react';

const InstructorCard = ({ins}) => {
    const {name,image, role} = ins
    return (
        <div className='p-9 border border-gray-200 shadow-xl rounded-2xl'>
            <div className='flex w-full rounded-full p-5 border-3 border-green-500 relative aspect-square justify-center items-center '>
                <Image 
                src={image}
                fill
                alt={name}
                className='rounded-full object-cover w-full'
                />
            </div>
            <div className='text-center space-y-2 pt-4'>
                <h2 className='text-[#0B1C30] font-semibold'>{name}</h2>
                <p className='text-[#3525CD] font-medium'>{role}</p>
            </div>
        </div>
    );
};

export default InstructorCard;