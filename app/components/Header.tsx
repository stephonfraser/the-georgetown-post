import React from 'react'
import Subscribe from './Buttons/Subscribe';

const Header = () => {
  return (
    <div className='p-5 bg-white w-full flex items-center justify-between'>
        <div className='tagline secondary-font'>
          The Citizen's News Platform
        </div>
        <div className='logo header-font'>
          <span>The</span> <span>Georgetown</span> <span className='text-[#712626]'>Post</span>
        </div>
        <div className='right-section'>
          <div className='subscribe-button'>
            <Subscribe />
          </div>
          <div className='menu'></div>
        </div>
    </div>
  )
}

export default Header