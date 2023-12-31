import React from 'react'
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
import a4 from '../assets/a4.png';
import a5 from '../assets/a5.png';
import a6 from '../assets/a6.png';
import { Link } from 'react-router-dom';

const testimonials = [
    { id: 1, name: 'Sam, 24', imageSrc: a1 },
    { id: 2, name: 'Natasha, 22', imageSrc: a2 },
    { id: 3, name: 'Jennifer, 21', imageSrc: a3 },
    { id: 4, name: 'Jack, 25', imageSrc: a4 },
    { id: 5, name: 'Natasha, 24', imageSrc: a5 },
    { id: 6, name: 'Boseman, 29', imageSrc: a6 },
    { id: 7, name: 'Sam, 24', imageSrc: a1 },
    { id: 8, name: 'Natasha, 22', imageSrc: a2 },
    { id: 9, name: 'Jennifer, 21', imageSrc: a3 },
    { id: 10, name: 'Jack, 25', imageSrc: a4 },
    { id: 11, name: 'Natasha, 24', imageSrc: a5 },
    { id: 12, name: 'Boseman, 29', imageSrc: a6 },
    { id: 13, name: 'Sam, 24', imageSrc: a1 },



];
export default function Mainsection() {
    return (
        <div className="grid grid-cols-3 gap-4 mt-5">
            {testimonials.map((testimonial) => (

                <div key={testimonial.id}>
                    <div className='m-5'>
                        <Link to="/profile">
                        <img src={testimonial.imageSrc} alt={testimonial.name} className="w-51.199 h-49.456 rounded-full bg-[path-to-image] bg-lightgray bg-center bg-cover bg-no-repeat text-center mx-auto my-auto" />
                        </Link>
                        <p className="text-gray-500 text-center font-plus-jakarta-sans text-16 font-normal">{testimonial.name}</p>
                    
                </div>
                </div>

    ))
}
        </div >
    )
}
