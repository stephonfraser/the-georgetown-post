import React from 'react'
import SmallCard from './Cards/SmallCard'

const TodayStories = () => {
  return (
    <div className='pt-10 '>
        <h2 className='font-bold	text-base	'>Today's Stories</h2>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
    </div>
  )
}

export default TodayStories