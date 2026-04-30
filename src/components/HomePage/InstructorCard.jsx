import Image from 'next/image';
import React from 'react';

const InstructorCard = ({ins}) => {
    const {name,image} = ins
    return (
        <div >
            <div>
                <Image 
                src={image}
                width={200}
                height={200}
                alt={name}
                />
            </div>
        </div>
    );
};

export default InstructorCard;