import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrFacebookOption,GrLinkedinOption,GrYoutube} from 'react-icons/gr'

const Navbar = () => {
  return (
    <div>
        <div className='bg-red-200 h-[50px] w-full flex flex-row justify-between items-center px-[50px]'>
            <div>
                <ul className='flex flex-row gap-2'>
                    <li className='h-[30px] w-[30px] rounded-[50%] bg-green-700 flex justify-center items-center text-white cursor-pointer'><AiOutlineTwitter/></li>
                    <li className='h-[30px] w-[30px] rounded-[50%] bg-green-700 flex justify-center items-center text-white cursor-pointer'><GrFacebookOption/></li>
                    <li className='h-[30px] w-[30px] rounded-[50%] bg-green-700 flex justify-center items-center text-white cursor-pointer'><GrLinkedinOption/></li>
                    <li className='h-[30px] w-[30px] rounded-[50%] bg-green-700 flex justify-center items-center text-white cursor-pointer'><GrYoutube/></li>
                </ul>
            </div>
            <div className='text-orange-500 font-bold'>HUZA <span className='text-green-700 font-bold'>FARMS</span></div>
            <div>
                <div className='h-auto w-auto bg-green-700 font-semibold text-white text-[11px] px-[10px] py-[3px] rounded-[5px]'>SIGNUP</div>
            </div>
        </div>
        <div className='bg-green-700 h-[50px] w-full flex flex-row justify-center items-center'>
            <ul className='flex flex-row gap-3 text-white'>
                <li className='flex cursor-pointer text-[12px] font-bold'>HOME</li>
                <li className='flex cursor-pointer text-[12px] font-bold'>ABOUT</li>
                <li className='flex cursor-pointer text-[12px] font-bold'>SERVICE</li>
                <li className='flex cursor-pointer text-[12px] font-bold'>PRODUCT</li>
                <li className='flex cursor-pointer text-[12px] font-bold'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar