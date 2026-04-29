import Image from 'next/image';
import React from 'react';

const CourseCard = ({data}) => {
    return (
        <div>
            <div className=' shadow-2xl'>
                <div className='relative w-full aspect-square'>
                    <Image 
                    src={data.image}
                   fill
                    alt={data.title}
                    className='object-cover'
                    ></Image>
                </div>
                <h2>{data.title}</h2>
            </div>
        </div>
    );
};

export default CourseCard;