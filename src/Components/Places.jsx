import React from 'react';
import PageLayout from './PageLayout';
import Card from './Card';

import One from '../Assets/one.png';
import Two from '../Assets/two.png';
import Three from '../Assets/three.png';
import Four from '../Assets/four.png';
import Five from '../Assets/five.png';
import Six from '../Assets/six.png';
import Seven from '../Assets/seven.png';
import Eight from '../Assets/eight.png';
import Settings from '../Assets/settings.svg';

const data = [
    {
      image: One,
    },
    {
      image: Two,
    },
    {
      image: Three,
    },
    {
      image: Four,
    },
    {
      image: Five,
    },
    {
      image: Six,
    },
    {
      image: Seven,
    },
    {
      image: Eight,
    },
    {
      image: One,
    },
    {
      image: Two,
    },
    {
      image: Three,
    },
    {
      image: Four,
    },
    {
      image: Five,
    },
    {
      image: Six,
    },
    {
      image: Seven,
    },
    {
      image: Eight,
    },
  ];

const Places = () => {
  return (
    <PageLayout>
      <div className="mb-12 flex flex-col items-center md:flex-row md:gap-[74px] gap-[24px] md:flex-wrap md:justify-center">
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>Fantasy City</p>
        <p>Beach</p>
        <p>Cabins</p>
        <p>Off-grid</p>
        <p>Farm</p>

        <button className=" flex gap-3 border border-lightGray px-2 py-2 rounded-lg">
          <span>Location</span>
          <img src={Settings} alt="" />
        </button>
      </div>

      <div className='mt-[39px] mb-12 flex flex-col items-center md:flex-row gap-[24px] md:flex-wrap md:justify-center'>
        {data.map((pic, i) => {
          return <Card key={i} image={pic.image} />
        })}
      </div>
    </PageLayout>
  )
}

export default Places;