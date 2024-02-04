import React from 'react'
import Image from 'next/image'

const MediumCard = () => {
  return (
    <div className='medium-card pt-10 flex'>
        <div className='image'>
            <Image src='/images/teacher-1.jpg' alt='teacher in class' width={250} height={300}/>
        </div>
        <div className='content'>
            <div className='title text-large secondary-font mx-2'>Teachers strike after news of not receiving salary increase</div>
            <div className='details flex py-2 pl-2 items-center secondary-font'>
                <div className='category p-2 bg-black text-white text-xs rounded-md uppercase mr-3'>Education</div>
                <div className='writer text-xs'>Salem Brown</div>
            </div>
        </div>
    </div>
  )
}

export default MediumCard