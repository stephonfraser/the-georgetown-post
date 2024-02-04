import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-5'>
        <ul className='flex flex-row navlist items-center space-x-9 secondary-font justify-center uppercase'>
            <li className='nav-items'>Home</li>
            <li className='nav-items'>Top Stories</li>
            <li className='nav-items'>Politics</li>
            <li className='nav-items'>Crime</li>
            <li className='nav-items'>Oil and Gas</li>
            <li className='nav-items'>Business</li>
            <li className='nav-items'>Agriculture</li>
            <li className='nav-items'>Education</li>
        </ul>
    </nav>
  )
}

export default Navbar