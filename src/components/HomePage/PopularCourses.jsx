import React from 'react';
import CourseCard from '../CourseCard';

const PopularCourses =async () => {
    const res = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/courses.json");
    const courseData = await res.json();
   
    const popularCourse = courseData.sort((a,b)=> b.rating - a.rating).slice(0,3);
    console.log(popularCourse);
    
    
   
    
    return (
        <div>
            <h2>Popular Courses</h2>
            <div>
                {
                    popularCourse.map(data=> <CourseCard key={data.id} data={data}></CourseCard >)
                }
            </div>
        </div>
    );
};

export default PopularCourses;