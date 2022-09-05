import React from 'react';
import './FeaturedInfo.css';
// import { Link } from 'react-router-dom'

function FeaturedInfo({
    info2,
    info3,
    path,
    order,
    background,
    color,
    className,
  }) {
    return (
        <div className='FeaturedInfo' style={{ background }}>
      <div className='featuredinfo' style={{ order, color }}>
        <h1>{info2}</h1>
        <p>{info3}</p>
      </div>
      <div className='featuredinfo2'>
      </div>
    </div>
    )
}

export default FeaturedInfo;
