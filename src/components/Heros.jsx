import React from 'react'
import flags from '../assets/flags.png'
export default function Heros() {
    return (
        <div className='text-center'>
            <h2 className='text-white font-plus-jakarta-sans text-16 font-medium mt-3'>Interests</h2>
            <p className='text-gray-500 font-plus-jakarta-sans text-16 font-medium mt-3'>gaming, music concerts, Taylor
                Swift, Rock </p>
            <p className='text-white font-plus-jakarta-sans text-16 font-normal mt-3'>People like you:
                <span className='text-gray-500 font-plus-jakarta-sans text-24 font-normal'>199</span>
                <span className='text-gray-500 font-plus-jakarta-sans text-16 font-normal'>/34k (6%)</span></p>
            <div className='flex justify-center mt-3'>
                <img src={flags} />
            </div>
        </div>
    )
}
