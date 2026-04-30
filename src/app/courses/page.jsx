import CourseCard from '@/components/CourseCard';
import React from 'react';

const CoursePage = async () => {
    const res = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/courses.json",
        { cache: 'no-store' });
    const courseData = await res.json();

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold text-center py-8'>All Courses</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-2 gap-6'>
                {
                    courseData.map(data=> <CourseCard key={data.id} data={data}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CoursePage;