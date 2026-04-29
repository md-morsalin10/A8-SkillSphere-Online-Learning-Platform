import Image from 'next/image';
import React from 'react';

const CourseCard = ({data}) => {
    return (
        <div>
            <div>
                <div>
                    <Image 
                    src={data.image}
                    width={200}
                    height={200}
                    alt={data.title}
                    ></Image>
                </div>
                <h2>{data.title}</h2>
            </div>
        </div>
    );
};

export default CourseCard;