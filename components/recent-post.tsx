'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';

// interface RecentPost {
//   timeStamp: Date;
//   minutes: number;
//   title: string;
//   shortDescription: string;
//   categories: string[];
// }

export default function RecentPost() {
  const [isClient, setIsClient] = useState(false);

  // mark as client
  useEffect(() => {
    setIsClient(true);
  }, []);
  // fetch post data when client and slug or language changes
  if (!isClient) return null;

  return (
    <div className="flex flex-col w-[321px] h-[650px]">
        <div>
            <Image className='rounded-t-lg' src="https://beqholdings.com/wp-content/uploads/2023/06/GTY_child_at_chalkboard_doing_math_jt_140315_16x9_1600-1024x576.jpg" alt="" width={321} height={321}/>
        </div>
        <div className='flex flex-col gap-4 p-6 bg-[#9690A20F] rounded-b-lg'>
            <div className='flex gap-2 items-center'>
                <div className='text-sm text-[#9690A2]'>2023-07-27 </div>
                <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                <div className='text-sm text-[#9690A2]'>5 min read</div>
            </div>
            <h4 className='text-[25px] text-white font-bold'>Data Scientist for Research (for CCPR)</h4>
            <p className='text-base text-[#FFFFFFBF]'>Job Title: Data Scientist for Research Platform Strong command of the English...</p>
            <div className='flex flex-wrap text-[14px] gap-2'>
                <a className='bg-[#9690A226] py-1 px-2 rounded-sm'>DataScientist</a>
                <a className='bg-[#9690A226] py-1 px-2 rounded-sm'>Job</a>
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