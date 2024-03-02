import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CourseDetail from './coursedetail';
import Header from './Header';
import './styles/App.css'; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  function Course() {
    return <div>This is the Course component</div>;
  }
  
  function MyComponent() {
    return (
      <div>
        <Course />
      </div>
    );
  }
}

export default App;
