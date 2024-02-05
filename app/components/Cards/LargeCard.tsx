import React from 'react'
import Image from 'next/image'

const LargeCard = () => {
  return (
    <div className='large-card grow pt-5'>
        <div className='image object-cover	'>
            <Image src='/images/teacher-1.jpg' alt='teacher in class' width={500} height={500}/>
        </div>
        <div className='content'>
            <div className='title text-xl secondary-font mt-5 hoveredText'>Teachers strike after news of not receiving salary increase</div>
            <div className='summary text-base secondary-font text-gray-500	'>
                The GTU plans to strike for 10 days following news that the government will not be raising their salaries for 2024.
            </div>
            <div className='details flex py-5 items-center secondary-font'>
                <div className='category p-3 bg-black text-white text-sm rounded-md uppercase mr-3'>Education</div>
                <div className='writer'>Salem Brown</div>
            </div>
        </div>
    </div>
  )
}

export default LargeCard