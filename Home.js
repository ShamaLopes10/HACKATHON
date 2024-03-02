import React from 'react';
import CourseList from './CourseList';
//import Course from './components/CourseDetail';

const Home = () => {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description 1' },
    { id: 2, title: 'Course 2', description: 'Description 2' },
    // Add more courses as needed
  ];

  return <CourseList courses={courses} />;
};

export default Home;
