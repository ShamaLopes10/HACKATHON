import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  let { id } = useParams();
  // Fetch course details based on `id`
  // Placeholder content for now
  return (
    <div>
      <h2>Course Details for ID: {id}</h2>
      <p>More information about the course...</p>
    </div>
  );
};

export default CourseDetail;
