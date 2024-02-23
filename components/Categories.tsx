'use client';
import Link from '@/node_modules/next/link';
import { useState } from 'react';
import Title from './chared/Title';

const list = [
  {
    title: 'Computers',
  },
  {
    title: 'Clothes',
  },
  {
    title: 'Shoes',
  },
  {
    title: 'Furniture',
  },
  {
    title: 'Cosmetics',
  },
  {
    title: 'Travel',
  },
  {
    title: 'Automotive',
  },
];

const Categories = () => {
  const [active, setActive] = useState(list ? list[0].title : '');
  return (
    <div className="min-w-[304px] rounded-md bg-dark">
      <div className="p-6">
        <div className="mb-8">
          <Title>CATEGORIES</Title>
        </div>
        <ul className="flex flex-col gap-3 mb-[60px] ">
          {list.map(({ title }) => {
            return (
              <li
                onClick={() => {
                  setActive(title);
                }}
                style={{ color: active === title ? '#8B57C6' : '' }}
                className="hover:text-white transition w-max cursor-pointer">
                {title}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between">
          <Link className="hover:text-white" href="/" target={'_blank'}>
            Help
          </Link>
          <Link className="hover:text-white" href="/" target={'_blank'}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
