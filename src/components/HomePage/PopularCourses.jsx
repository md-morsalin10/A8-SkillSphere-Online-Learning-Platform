import React, { cache } from 'react';
import CourseCard from '../CourseCard';
import Link from 'next/link';
import MotionWrapper from '../MotionWrapper/MotionWrapper';

const PopularCourses = async () => {
    const res = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/courses.json",
        { cache: 'no-store' });
    const courseData = await res.json();

    const popularCourse = courseData.sort((a, b) => b.rating - a.rating).slice(0, 3);
    console.log(popularCourse);


    return (
        <div className='container mx-auto p-5'>
            <div className='flex justify-between space-y-6'>
                <div >
                    <MotionWrapper delay={0.4}>
                        <h2 className='text-[#0B1C30] text-3xl font-bold'>Popular Courses</h2>
                    </MotionWrapper>
                    <p className='text-[#464555] text-sm'>Our most enrolled programs this month</p>
                </div>

                <MotionWrapper delay={0.4}>
                    <Link href={'/courses'}>
                        <button className='text-[#3525CD] text-sm cursor-pointer btn btn-outline'>View All Courses</button>
                    </Link>
                </MotionWrapper>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    popularCourse.map(data => <CourseCard key={data.id} data={data}></CourseCard >)
                }
            </div>
        </div>
    );
};

export default PopularCourses;