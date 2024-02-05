import React from 'react'

const SmallCard = () => {
  return (
    <div className='medium-card pt-5 flex'>
        <div className='content'>
            <div className='title text-sm secondary-font mx-2 hoveredText'>Teachers strike after news of not receiving salary increase</div>
            <div className='details flex py-2 pl-2 items-center secondary-font'>
                <div className='category px-2 bg-black text-white text-[10px] rounded-md uppercase mr-3'>Education</div>
                <div className='writer text-xs'>Salem Brown</div>
            </div>
        </div>
    </div>
  )
}

export default SmallCard