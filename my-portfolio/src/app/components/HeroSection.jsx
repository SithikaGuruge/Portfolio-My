"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-12 '>
    <div className='col-span-7 place-self-center text-center sm:text-left'>
    <h1 className='mb-4 text-4xl lg:text-6xl font-extrabold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-700'>Hello, I'm {" "}</span> <br />
    <span className='text-3xl lg:text-5xl'>
    <TypeAnimation
      sequence={[
        'Sithika',
        1000, 
        'Web developer',
        1000,
        'Mobile Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </span>

    </h1>
    <p className='sm:text-lg lg:text-xl mb-2 text-base'>I am a highly motivated computer science and engineering student at the University of Moratuwa, with 
excellent problem-solving abilities, attention to detail, and proficiency in various programming languages 
and tools. </p>
    <div>
    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-400 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-400 to-pink-500 hover:bg-slate-200 border-white mt-2'>
    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume</span></button>
    </div>
    </div>
    <div className='col-span-5 place-self-center mt-4'>
    <div className='rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[400px] relative'>
        <Image
        src="/Sithika Guruge.jpeg"
        alt="image"
        className='absolute transform -translate-x-1/2 -translate-y-1/3 top-1/2 left-1/2'
        width={250}
        height={250}></Image>
        </div>
    </div>
    </div>
    </section>
)
}

export default HeroSection