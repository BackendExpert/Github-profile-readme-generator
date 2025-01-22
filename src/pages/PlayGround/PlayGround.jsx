import React, { useState } from 'react'
import SearchUser from './SearchUser';
import Profile from './Profile';
import FeatureList from './FeatureList';

const PlayGround = () => {


  return (
    <div className='pt-24 md:px-20'>
        <div className="md:flex">
            <div className="md:w-1/4 md:mr-2">
                <SearchUser />
                <hr className='my-2'/>
                <Profile />
                <hr className='my-2'/>
                <FeatureList />
            </div>
            <div className="w-full md:ml-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero saepe veritatis modi asperiores. Saepe quas amet est, minima eum expedita aliquid porro ratione officiis nobis unde ad corrupti praesentium?
            </div>
        </div>
    </div>
  )
}

export default PlayGround