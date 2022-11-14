import React from 'react'
import Metamask from '../Assets/metamask.svg';
import MBToken from '../Assets/mbtoken.png';
import Opensea from '../Assets/opensea.svg';

const Partners = () => {
  return (
    <div className='flex flex-col mt-20 py-3 md:py-1 md:flex-row gap-3 md:justify-around items-center bg-primary'>
        <img src={MBToken} alt="" />
        <img src={Metamask} alt="" />
        <img src={Opensea} alt="" />
    </div>
  )
}

export default Partners