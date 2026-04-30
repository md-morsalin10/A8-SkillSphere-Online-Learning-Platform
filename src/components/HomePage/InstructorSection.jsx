import React from 'react';
import InstructorCard from './InstructorCard';

const InstructorSection =async () => {
    const res = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/instructor.json",
         {cache:"no-store"});
    const instructor = await res.json();

    console.log(instructor);
    
    return (
        <div>
            <h2 className='text-4xl font-bold text-[#0B1C30] text-center'>Top Instructors</h2>
            <div className='container mx-auto'>
                {
                    instructor.map(ins=> <InstructorCard key={ins.id} ins={ins}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default InstructorSection;