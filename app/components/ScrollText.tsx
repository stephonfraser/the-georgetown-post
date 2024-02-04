import React from 'react'

const ScrollText = () => {
  return (
    <div className='scroll-container'>
        <div className='scroll-text'>
            Breaking News: More oil found at Stabroek Block Oil Field raising the expectations for more oil production and more revenue.
        </div>
        <div className='scroller'>
          <ul className='breaking-news-list scroller__inner'>
            <li>Breaking News:</li>
            <li>More oil found at Stabroek Block Oil Field raising the expectations for more oil production and more revenue.</li>
          </ul>
        </div>
    </div>
  )
}

export default ScrollText