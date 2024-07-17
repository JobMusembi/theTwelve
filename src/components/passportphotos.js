// src/components/PassportPhotos.js
import React from 'react';
import image1 from '../images/his.jpg';
import image2 from '../images/hers.jpg';
//import './PassportPhotos.css';

const PassportPhotos = () => (
  <div>
    <h4>You'll be working with :</h4>
    <div className="image-container">
    <div className="image-caption">
      <img src={image1} alt="job" />
      <div className="caption">JOB</div>
      </div>
      <div className="image-caption">
        <img src={image2} alt="faith" />
        <div className="caption">FAITH</div>
      </div>
    </div>
  </div>
);

export default PassportPhotos;
