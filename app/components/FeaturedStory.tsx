import React from 'react'
import LargeCard from './Cards/LargeCard';
import { promises as fs } from 'fs';


const FeaturedStory = () => {
  return (
    <div className='py-10'>
      <h2 className='font-bold	text-base	'>Featured News</h2>
      <LargeCard />
    </div>
  )
}

export default FeaturedStory