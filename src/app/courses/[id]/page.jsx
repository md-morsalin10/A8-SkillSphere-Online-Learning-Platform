import React from 'react';

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    // console.log(id, "params");

    const resp = await fetch("https://a8-skill-sphere-online-learning-pla.vercel.app/courses.json",
        { cache: 'no-store' });
    const courseData = await resp.json();

    const course = courseData.find(data=> data.id == id);
    console.log(course,"expected course");
    

    const res = fetch

    return (
        <div>

        </div>
    );
};

export default CourseDetails;