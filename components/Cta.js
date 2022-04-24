import Link from 'next/link';
import React from 'react'
import { AiFillAndroid,AiFillWindows } from "react-icons/ai";
import { GiWireframeGlobe } from "react-icons/gi";

const Cta = () => {
  return (
    <aside className="p-4 md:p-12 mt-20 sm:p-16 lg:p-24">
    <div className="max-w-5xl mx-auto text-center">
        <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-normal text-white lg:text-6xl md:tracking-tight">
            Get started with your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">virtual portfolio</span> for free.
        </h1>

        <div className="mt-8 sm:items-center sm:justify-center sm:flex">
            
             <a href="https://cryptocademy.netlify.app/signup" className="text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 center inline-flex items-center mr-2 mb-2 text-left ">
                <GiWireframeGlobe className='w-7 h-7 text-white mr-2'/>
                Cryptocademy   
                <br />
                Web
            </a>

            <button className="text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 center inline-flex items-center mr-2 mb-2 text-left ">
                <AiFillAndroid className='w-7 h-7 text-white mr-2'/>
                Coming soon on
                <br />
                Android
            </button>
            
            <button type="button" className="text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 center inline-flex items-center mr-2 mb-2 text-left ">
                <AiFillWindows className='w-7 h-7 text-white mr-2'/>
                Coming soon for
                <br />
                Windows
            </button>
                
        </div>
    </div>
    </aside>
  )
}

export default Cta