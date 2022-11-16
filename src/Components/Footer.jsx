import React from 'react';
import PageLayout from './PageLayout';
import Logo2 from '../Assets/logowhite.png';
import Facebook from '../Assets/facebook.svg';
import Twitter from '../Assets/twitter.svg';
import Instagram from '../Assets/instagram.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-black'>
        <PageLayout>
        <div className="md:flex md:justify-between pt-8 pb-5">
          <div>
            <Link to="/">
              <img className="mx-auto md:mx-0" src={Logo2} alt="" />
            </Link>

            <div className=" flex justify-center md:justify-start gap-6 pt-24">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>

          <div className=" pt-9 text-center md:text-left md:pt-0 xl:w-52">
            <p className="text-footerTitle text-white">Community</p>
            <div className="text-footerList text-lightGray ">
              <p className=" pt-6">NFTs</p>
              <p className=" pt-4">Tokens</p>
              <p className=" pt-4">Landlords</p>
              <p className=" pt-4">Discord</p>
            </div>
          </div>

          <div className=" pt-9 text-center md:text-left md:pt-0 xl:w-52">
            <p className="text-footerTitle text-white">Places</p>
            <div className=" text-footerList text-lightGray ">
              <p className=" pt-6">Castle</p>
              <p className=" pt-4">Farms</p>
              <p className=" pt-4">Beach</p>
              <p className=" pt-4">Learn more</p>
            </div>
          </div>

          <div className=" pt-9 text-center md:text-left md:pt-0 xl:w-52">
            <p className="text-footerTitle text-white">About us</p>
            <div className=" text-footerList text-lightGray ">
              <p className=" pt-6">Road map</p>
              <p className=" pt-4">Creators</p>
              <p className=" pt-4">Career</p>
              <p className=" pt-4">Contact us</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 py-5 justify-center md:justify-start text-white">
          <p>&#169; 2022 Metabnb</p>
        </div>
        </PageLayout>
    </div>
  )
}

export default Footer