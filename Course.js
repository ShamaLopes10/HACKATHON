import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Course.css'; 

const Course = ({ course }) => (
  <div className="course">
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <Link to={`/course/${course.id}`}>View Details</Link>
  </div>
);

export default Course;
