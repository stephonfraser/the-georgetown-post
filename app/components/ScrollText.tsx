import React from 'react'

const ScrollText = () => {
  return (
    <div className='scroll-container'>
        <div className='scroll-text text-nowrap'>
            Breaking News: More oil found at Stabroek Block Oil Field raising the expectations for more oil production and more revenue. | Elections set for March 2025 as plans are being made by the Guyana Elections Commission to ensure free and fare elections this coming year.
        </div>
        <div className='scroller hidden'>
          <ul className='breaking-news-list scroller__inner'>
            <li>Breaking News:</li>
            <li>More oil found at Stabroek Block Oil Field raising the expectations for more oil production and more revenue.</li>
            <li>|</li>
            <li>Elections set for March 2025 as plans are being made by the Guyana Elections Commission to ensure free and fare elections this coming year.</li>
          </ul>
        </div>
    </div>
  )
}

export default ScrollText