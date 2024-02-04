import React from 'react'
import LargeCard from './Cards/LargeCard';
import LatestStories from './LatestStories';
import TodayStories from './TodayStories';
import FeaturedStory from './FeaturedStory';

interface NewsHeroProps {
    storyType: string;
}

const NewsHero: React.FC<NewsHeroProps> = ({storyType}) => {
  return (
    <div className='featured-section'>
      {storyType=='feature' && 
        <>
          <FeaturedStory />
        </>
      }
      {storyType=='latest' &&
        <>
          <LatestStories />
        </>
        
      }
      {storyType=='today' &&
        <>
          <TodayStories />
        </>
       
      }
    </div>
  )
}

export default NewsHero