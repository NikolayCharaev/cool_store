import React from 'react';
import Button from './chared/Button';
import Image from 'next/image';
import comp from '@/public/comp.png';

const Banner = () => {
  return (
    <div className="bg-dark rounded-md w-full relative ">
      <div className="px-[42px]">
        <h1 className="text-[100px] font-black whitespace-nowrap  uppercase leading-[145px] text-dark-light mb-2">
          BIG SALE 20%
        </h1>
        <div className="flex justify-between">
          <div className="">
            <h3 className="font-medium uppercase text-[19px] mb-2">the bestseller of 2022 </h3>
            <h1 className="text-white uppercase text-[42px] max-w-[472px] font-bold mb-6">
              LENNON r2d2 <br /> with NVIDIA 5090 TI
            </h1>

            <Button>Shop Now</Button>
          </div>
        </div>
      </div>
      <div className="absolute z-10 bottom-[-20px] right-[40px] ">
        <Image src={comp} alt="big-poster" width={462} height={359} />
      </div>
    </div>
  );
};

export default Banner;
