import React from 'react'
import bg1 from '../assets/bg1.svg'
import bg2 from '../assets/bg2.svg'
import a2 from '../assets/a2.png';
import { MdPublic } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoInvertMode } from "react-icons/io5";
import Option from './Option';

export default function Profile() {
    const data = [
        { id: 1, name: 'comfortable around people who drink, vape',bg:false },
        { id: 2, name: 'attachment style: Super glue' ,bg:true},
        { id: 3, name: 'pet-free',bg:false },
        { id: 4, name: 'Healthy Snacker',bg:false },
        { id: 5, name: 'Not to be seen in a gym',bg:true },
        { id: 6, name: 'Conversation Commander' ,bg:false},
        { id: 7, name: 'expects fun anytime', bg:false},

    ]
    const data1 = [
        { id: 1, name: 'comfortable around people who drink, vape',bg:false },
        { id: 2, name: 'attachment style: Super glue' ,bg:true},
        { id: 3, name: 'pet-free',bg:false },
        { id: 4, name: 'Healthy Snacker',bg:false },
        { id: 5, name: 'Not to be seen in a gym',bg:false },
        { id: 6, name: 'Conversation Commander' ,bg:false},
        { id: 7, name: 'expects fun anytime', bg:false},

    ]
    const data3 = [
        { id: 1, name: 'comfortable around people who drink, vape',bg:false },
        { id: 2, name: 'attachment style: Super glue' ,bg:false},
        { id: 3, name: 'pet-free',bg:false },
        { id: 4, name: 'Healthy Snacker',bg:false },
        { id: 5, name: 'Not to be seen in a gym',bg:true },
        { id: 6, name: 'Conversation Commander' ,bg:false},
        { id: 7, name: 'expects fun anytime', bg:false},

    ]
    return (
        <>
                <div className='w-[370px] h-screen bg-[#1E1E1E] mx-auto'>
                    <div className='relative '>
                        <div className=' '>
                            <img src={bg1} className='' />
                        </div>
                        <div className='absolute top-0'>
                            <img src={bg2} className='' />
                        </div>
                        <div className=' absolute w-[150px] h-[150px] bg-red-800 inset-x-auto -mt-[100px] ml-[100px] rounded-full'>
                            <div className='flex items-center justify-center'>
                                <img src={a2} width="100px" className='mt-6' />
                            </div>
                        </div>
                    </div>
                    <div className=' mt-[80px] bg-[#1E1E1E]'>
                        <div className=' text-center'>
                            <div>
                                <p className='text-white font-plus-jakarta-sans text-16 font-semibold'>You <span className='text-gray-500 '>21</span></p>
                                <p className='text-gray-500 font-plus-jakarta-sans text-12 font-semibold'>Female</p>
                            </div>
                        </div>

                        <div className='ml-3 mt-5'>
                            <p className=' text-purple-600 text-left font-plus-jakarta-sans text-14 font-medium mt-2'>FIRST NAME : <span className='text-white '>Jennifer</span></p>
                            <p className=' text-purple-600 text-left font-plus-jakarta-sans text-14 font-medium mt-2'>LAST NAME : <span className='text-white '>John</span></p>
                            <p className=' text-purple-600 text-left font-plus-jakarta-sans text-14 font-medium mt-2'>BIRTHDAY : <span className='text-white '>7  May 2005</span></p>
                            <p className=' text-purple-600 text-left font-plus-jakarta-sans text-14 font-medium mt-2'>AGE : <span className='text-white '>22</span></p>
                            <p className=' text-purple-600 text-left font-plus-jakarta-sans text-14 font-medium mt-2'>GENDER : <span className='text-white '>Female</span></p>
                            <p className=' text-purple-600 text-left font-plus-jakarta-sans text-14 font-medium mt-2'>PHONE : <span className='text-white '>+91 8283016334</span></p>
                            <p className=' text-purple-600 text-left font-plus-jakarta-sans text-14 font-medium mt-2'>EMAIL : <span className='text-white '>jenni.john@gmail.com</span></p>
                        </div>
                        <div className='ml-5'>
                            <div className='flex mt-2'>
                                <MdPublic className='w-18 h-18 text-white' />
                                <p className='ml-2 text-white text-right font-plus-jakarta-sans text-14 font-medium'>San fransisco</p>
                            </div>
                            <div className='flex mt-2'>
                                <IoMdSchool className='w-18 h-18 text-white' />
                                <p className='ml-2 text-white text-right font-plus-jakarta-sans text-14 font-medium'>Harvard</p>
                            </div>
                            <div className='flex mt-2'>
                                <MdOutlineWorkOutline className='w-18 h-18 text-white' />
                                <p className='ml-2 text-white text-right font-plus-jakarta-sans text-14 font-medium'>Not yet</p>
                            </div>
                            <div className='flex mt-2'>
                                <IoInvertMode className='w-18 h-18 text-white ' /> <p className='ml-2 text-gray-500 font-plus-jakarta-sans text-14 font-medium'>Tell everyone what’s the most
                                    interesting thing about you?</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-white font-plus-jakarta-sans text-16 font-medium ml-6 mt-2'>Interests</p>
                            <Option data={data} />
                            <p className='text-white font-plus-jakarta-sans text-16 font-medium ml-6 mt-2'>Hobbies</p>
                            <Option data={data1} />
                            <p className='text-white font-plus-jakarta-sans text-16 font-medium ml-6 mt-2'>Lifestyle</p>
                            <Option data={data3} />
                        </div>
                    </div>
                </div>
            
        </>
    )
}
