import React from 'react';
import Metapic from '../Assets/picture2.svg';
import PageLayout from './PageLayout';

const Metanfts = () => {
  return (
    <div className='bg-primary'>
        <PageLayout>
            <div className='md:flex md:gap-11'>
                <div className='md:w-1/2 lg:w-3/5 lg:mt-[100px] xl:mt-[100px]'>
                    <p className='text-headline-2 text-white mt-[60px]'>
                        Metabnb NFTs
                    </p>
                    <p className='h-[136px] py-9 md:text-sm lg:text-base max-w-md md:max-w-lg xl:w-[415px] text-white'>
                        Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </p>
                    <button className="mt-8 bg-white w-[156px] h-[48px] mx-auto md:mx-0 md:px-3 px-5 py-3 text-primary rounded-md ">
                        Learn more
                    </button>
                </div>

                <div className='pb-5 md:w-1/2 lg:w-3/5 xl:w-[704px] mt-[100px]'>
                    <img src={Metapic} alt="" />
                </div>
            </div>
        </PageLayout>
    </div>
  )
}

export default Metanfts