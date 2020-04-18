import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/app.jsx';
const { render } = ReactDOM;

 render(
   <Review />,
   document.getElementById('review')
 );
window.Review = Review;
