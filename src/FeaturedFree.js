import React from 'react';
import './FeaturedFree.css';
import { Link } from 'react-router-dom'

function FeaturedFree({
    title,
    info,
    link,
    path,
    image,
    order,
    background,
    color,
    className,
  }) {
    return (
        <div className='featuredfree' style={{ background }}>
      <div className='featuredfree__left' style={{ order, color }}>
        <h4>{title}</h4>
        <p>{info}</p>
        <Link to={path} className={className}>
          {link}
        </Link>
      </div>
      <div className='featuredfree__right'>
        <img src={image} alt='' />
      </div>
    </div>
    )
}

export default FeaturedFree
