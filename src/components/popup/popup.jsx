import React from 'react';
import './style.scss';

import ReviewForm from '../review-form/review-form';
export default function Popup() {
  return (
    <div className="overlay">
      <ReviewForm />
    </div>
  );
}
