import React from 'react'
import LargeCard from './Cards/LargeCard';
import MediumCard from './Cards/MediumCard';
import LatestStories from './LatestStories';

const FeaturedStory = ({ storyType }) => {
  return (
    <div className='featured-section'>
      {storyType=='feature' && 
        <LargeCard />
      }
      {storyType=='latest' &&
        <LatestStories />
      }
      {storyType=='trending' &&
        <LargeCard />
      }
    </div>
  )
}

export default FeaturedStory