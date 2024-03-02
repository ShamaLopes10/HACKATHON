import React from 'react';
import './styles/CourseList.css';



const CourseList = ({ courses }) => (
  <div className="course-list">
    {courses.map(course => <Course key={course.id} course={course} />)}
  </div>
);

export default CourseList;
