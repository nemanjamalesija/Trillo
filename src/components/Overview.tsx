import React from 'react';
import { starICon, locationPinIcon } from '../components/Icons';

const Overview = () => {
  return (
    <div className='overview'>
      <h1 className='overview__heading'>Hotel Europa </h1>
      <div className='overview__stars'>
        {starICon}
        {starICon}
        {starICon}
        {starICon}
        {starICon}
      </div>
      <div className='overview__location'>
        {locationPinIcon}
        <button className='btn-inline'>Budva, Montenegro</button>
      </div>
      <div className='overview__rating'>
        <p className='overview__rating-average'>8.6</p>
        <p className='overview__rating-count'>429 votes</p>
      </div>
    </div>
  );
};

export default Overview;
