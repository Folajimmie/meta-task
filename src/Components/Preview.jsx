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
  ];

const Preview = () => {
  return (
    <PageLayout>
        <div className='text-headline-2 text-center mt-[39px] text-black md:text-5xl'>
            Inspiration for your next adventure
        </div>

        <div className='mt-[39px] mb-12 flex flex-col items-center md:flex-row gap-[24px] md:flex-wrap md:justify-center'>
            {data.map((pic, i) => {
                return <Card key={i} image={pic.image} />
            })}
        </div>
    </PageLayout>
  );
};

export default Preview;