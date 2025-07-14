'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import Image from 'next/image';

export default function PreviewPost() {
  const [isClient, setIsClient] = useState(false);

  // mark as client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // fetch post data when client and slug or language changes
  if (!isClient) return null;

  return (
    <div className='rounded-[5px] w-[330px] h-[330px] relative overflow-hidden'>
      <Image
        src="https://beqholdings.com/wp-content/uploads/2023/07/1704476-1024x640.jpg"
        alt="Post preview"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div
        className='absolute inset-0 p-6 flex flex-col gap-4'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.35)', 
        }}
      >
        <div className='flex gap-2 items-center'>
          <div className='text-[15px] text-white font-medium'>2023-07-27</div>
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          <div className='text-[15px] text-white font-medium'>5 min read</div>
        </div>
        <h4 className='text-[25px] text-[#BF9B30] font-bold'>Data Scientist for Research (for CCPR)</h4>
        <div className='flex flex-wrap text-[14px] gap-2'>
          <a className='bg-[#9690A280] text-[#BF9B30] py-1 px-2 rounded-sm'>DataScientist</a>
          <a className='bg-[#9690A280] text-[#BF9B30] py-1 px-2 rounded-sm'>Job</a>
        </div>
        <a
          className="group w-fit relative flex items-center gap-2 py-2 px-3 rounded-md transition-colors duration-300 ease-in-out hover:bg-white/10 overflow-hidden"
          href="#"
        >
          <div className="text-lg transition-colors duration-300 ease-in-out group-hover:text-[#BF9B30]">Read More</div>
          <div className="relative flex items-center w-5 h-5">
            {/* White arrow - moves right and fades out */}
            <ArrowRight
              size={20}
              weight="bold"
              color="#ffffff"
              className="absolute transition-all duration-300 ease-out group-hover:translate-x-full group-hover:opacity-0"
            />
            {/* Yellow arrow - appears from left and moves right */}
            <ArrowRight
              size={20}
              weight="bold"
              color="#BF9B30"
              className="absolute -translate-x-full opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </a>
      </div>
    </div>
  );
}