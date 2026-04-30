import Image from 'next/image';
import React from 'react';
import { IoMdStar } from 'react-icons/io';

const CourseCard = ({ data }) => {
    return (
        <div className='group '>
            <div className=' flex h-full flex-col border border-gray-200 shadow-2xl space-y-3 rounded-2xl p-5'>
                <div className='w-full flex justify-center items-center'>
                    <Image
                        src={data.image}
                        width={400}
                        height={400}
                        className='rounded-t-2xl  object-contain'
                        alt={data.title}
                    ></Image>
                </div>
                <div className='grow space-y-3 mt-3'>
                    <h4 className='flex items-center text-amber-600 font-semibold'>
                        <IoMdStar size={20} />{data.rating}</h4>
                    <h2 className='text-[#0B1C30] text-2xl font-medium'>{data.title}</h2>
                    <p className='text-[#464555] text-sm'>Instructor: {data.instructor}</p>
                </div>

                <div className='mt-5'>
                    <button className='btn btn-primary w-full'>See Details</button>
                </div>
            </div>

        </div>
    );
};

export default CourseCard;