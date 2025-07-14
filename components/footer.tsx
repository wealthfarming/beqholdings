"use client"
import FooterData from "@/data/footer.json"
import Image from "next/image"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"

export default function Footer()
{
  return (
    <footer className='bg-inherit text-white px-20 md:px-30 lg:px-40 pt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8'>
        {/* Logo Section */}
        <div className='flex flex-col items-start'>
          <Image
            alt="BEQ Holdings Logo"
            src="https://beqholdings.com/wp-content/uploads/2023/04/BEQ-HOLDINGS-logo-dark.png"
            width={100}
            height={100}
            className="mb-2"
          />
        </div>

        {/* Company Address Section */}
        <div className='flex flex-col gap-4'>
          <div className='text-white font-bold text-base pb-2'>{FooterData.companyName}</div>
          {FooterData?.address.map((address, index) => (
            <div key={index} className='flex flex-col justify-start text-base'>
              <div className='text-[#BF9B30] font-bold'>{address.region}:</div>
              <div className='text-white/80'>{address.details}</div>
            </div>
          ))}
        </div>

        {/* Work Inquiries Section */}
        <div className='flex flex-col gap-4'>
          <div className='text-white font-bold text-base pb-2'>Work inquiries</div>
          <div className='text-base'>
            <div className='text-white/80'>Interested in working with us?</div>
            <a href={`mailto:${FooterData.email}`} className='text-[#BF9B30] hover:underline'>
              {FooterData.email}
            </a>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className='flex flex-col gap-4'>
          <div className='text-white font-bold text-base pb-2'>Sign up for the newsletter</div>
          <div className='flex flex-col gap-4'>
            <div className='flex space-x-2'>
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                className="flex-1 bg-[#9690A214] border-none text-white placeholder:text-white/50 focus:ring-0 focus:ring-offset-0"
              />
              <Button className="bg-[#9690A214] hover:bg-[##9690A2] text-white">Sign Up</Button>
            </div>
            {/* Placeholder for hCaptcha */}
            <div className="bg-white rounded-md p-4 flex items-center justify-between text-sm text-gray-700">
              <span>Tôi là con người</span>
              {/* <Image
                src="/placeholder.svg?height=24&width=24"
                alt="hCaptcha logo"
                width={24}
                height={24}
                className="ml-2"
              /> */}
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="border-white/50 data-[state=checked]:bg-[#BF9B30] data-[state=checked]:text-black" />
              <label
                htmlFor="terms"
                className="text-sm font-normal text-white/80"
              >
                I&apos;m okay with getting emails and having that activity tracked to improve my experience.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='py-8 border-t border-white/10 text-sm text-white/70'>
        © 2016-2023 <span className='text-[#BF9B30]'>BeQ Holdings.</span> All rights reserved
      </div>
    </footer>
  )
}
