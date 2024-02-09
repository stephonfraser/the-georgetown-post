import React from 'react'
import SmallCard from './Cards/SmallCard'
import { promises as fs } from 'fs';


const TodayStories = async () => {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  console.log(data)

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