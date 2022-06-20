import React from 'react'
import { AiFillAndroid,AiFillWindows } from "react-icons/ai";
import { GiWireframeGlobe } from "react-icons/gi";

const Hero = () => {
  return (
    <section className=" px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto  md:w-11/12 xl:w-9/12 text-center">
            <h1 className="mb-6 text-4xl f font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
            Invest in <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">cryptocurrency</span> without risking real money.
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-300 lg:px-24">
            Cryptocademy provides a real-time, risk-free trading simulator that allows you to msater crypto trading and investing at zero cost. Hone your skills and feel confident with crypto trading and investing.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">

                <a href='https://cryptocademy.netlify.app/signup'  className="text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 center inline-flex items-center mr-2 mb-2 text-left ">
                    <GiWireframeGlobe className='w-7 h-7 text-white mr-2'/>
                    Try on   
                    <br />
                    Browser
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.cryptocademy.android" className="text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 center inline-flex items-center mr-2 mb-2 text-left ">
                    <AiFillAndroid className='w-7 h-7 text-white mr-2'/>
                    Get it on
                    <br />
                    Play Store
                </a>
                
                <button type="button" className="text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 center inline-flex items-center mr-2 mb-2 text-left ">
                    <AiFillWindows className='w-7 h-7 text-white mr-2'/>
                    Coming soon on 
                    <br />
                    Windows
                </button>
            
                
            </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center flex justify-center md:w-full">
            <video controls poster='poster.png' >
                <source src="/cryptocademy1.mp4"
                type="video/mp4"/>

                Sorry, your browser doesn&apos;t support embedded videos.
            </video>

        </div>
    </section>

  )
}

export default Hero