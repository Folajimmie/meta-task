import React from 'react';
import PageLayout from './PageLayout';
import HeaderImage from '../Assets/picture1.svg';

const Header = () => {
  return (
    <div>
        <PageLayout>
            <div className='md:flex md:gap-14 xl:justify-between'>
                <div className=" md:w-1/2 md:mt-20 lg:mt-24 lg:w-3/5 xl:w-3/5 xl:max-w-[646px] xl:mt-16 2xl:w-1/2">
                    <p className=" md:text-3xl text-center text-4xl lg:text-4xl xl:text-headline-1 xl:leading-[78px] text-tblack leading-snug">
                        Rent a <span className="text-span text-primary">Place</span> away from <span className="text-span text-primary">Home</span> in the <span className="text-span text-primary">Metaverse</span>
                    </p>
                    <p className=" md:text-sm mt-1 lg:text-base xl:text-body py-3 xl:mt-10 max-w-[636px] text-tblack">
                        We provide you access to luxury and affordable houses in the
                        metaverse, get a chance to turn your imagination to reality at your
                        comfort zone
                    </p>
                    <div className=" mt-8 flex h-[54px] xl:w-full">
                        <input
                            className="w-[390px] p-5 text-lightGray border-solid border border-lightGray border-r-0 rounded-l-lg focus:border-none focus:ring-1 focus:ring-lightGray focus:outline-none"
                            type="text"
                            placeholder="Search for location"
                        />
                        <button className=" h-[54px] w-[230px] text-white bg-primary px-5 rounded-r-lg">
                            Search
                        </button>
                    </div>
                </div>

                <div className='md:w-5/12 lg:w-3/5 xl:w-2/5 xl:max-w-[476px] 2xl:w-1/2 mt-8'>
                    <img src={HeaderImage} alt="" />
                </div>
            </div>
        </PageLayout>
    </div>
  )
}

export default Header