import React from 'react'

export default function Option({ data }) {
    return (
        <div>
            <div className='flex w-269.461 h-35 p-2 justify-center items-start content-start  flex-shrink-0 flex-wrap'>
                {data.map((data) => (
                    <div key={data.id}>
                        <div className={`m-2 p-2 text-white rounded-lg ${data.bg ? 'bg-[#7857FF]' : 'bg-[#232121]'}`}>
                            <p className="">{data.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
