import React from 'react';
import Star from '../Assets/star.png';


const Card = ({ image }) => {
  return (
    <div className='w-[292px] h-[372px] p-4 border-solid border border-lightGray rounded-3xl'>
        <img 
            className='w-full rounded-[8px]' 
            src={image} 
            alt="" 
        />
        
        <div className='flex justify-between pt-4 pb-3'>
            <p>Desert King</p>
            <p><span className='font-semibold'>1MBT</span> per night</p>
        </div>

        <div className="flex justify-between text-xs pb-3">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>

        <div className=" w-[12px] flex gap-1 ">
          <img className="" src={Star} alt="" />
          <img className="" src={Star} alt="" />
          <img className="" src={Star} alt="" />
          <img className="" src={Star} alt="" />
          <img className="" src={Star} alt="" />
        </div>
    </div>
  )
}

export default Card;