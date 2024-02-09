import React from 'react'
import MediumCard from './Cards/MediumCard'
import { promises as fs } from 'fs';


const LatestStories = () => {
  return (
    <div className='pt-10 pl-10'>
        <h2 className='font-bold	text-base	'>Latest Stories</h2>
        <MediumCard />
        <MediumCard />
        <MediumCard />
    </div>
  )
}

export default LatestStories