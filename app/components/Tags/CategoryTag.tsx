import React from 'react'

interface CategoryTagProps {
    cardSize: string;
    categoryName: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({cardSize, categoryName}) => {
  return (
    <>
        { cardSize === "large" &&
            <div className='category p-2 bg-[#4c1c1c] text-white text-sm rounded-lg uppercase mr-3 hover:cursor-pointer'>{categoryName}</div>
        }
        { cardSize === "medium" &&
            <div className='category p-2 bg-[#4c1c1c] text-white text-xs rounded-lg uppercase mr-3 hover:cursor-pointer'>{categoryName}</div>
        }
        { cardSize === "small" &&
            <div className='category p-2 bg-[#4c1c1c] text-white text-[10px] rounded-lg uppercase mr-3 hover:cursor-pointer'>{categoryName}</div>
        }
    </>
  )
}

export default CategoryTag