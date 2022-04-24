import React from 'react'
import { Nav } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Head from 'next/head'

const contact = () => {
  return (
    <>
        <Head>
        <title>Cryptocademy - Learn to invest like a pro.</title>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="Cryptocademy is an app that teaches people how to trade cryptocurrencies and invest in coins like bitcoin,ethereum etc. User can analyze market data by viewing charts, top daily cryptocurrency news. Through our curated blogs and courses,users can also learn more about cryptocurrency and blockchain concepts."/>
        <link rel="canonical" href="https://cryptocademy.netlify.app/"/>
        <meta property="og:title" content="Learn to invest like a pro"/>
        <meta property="og:description" content="Cryptocademy is an app that teaches people how to trade cryptocurrencies and invest in coins like bitcoin,ethereum etc. User can analyze market data by viewing charts, top daily cryptocurrency news. Through our curated blogs and courses,users can also learn more about cryptocurrency and blockchain concepts."/>
        <meta property="og:image" content="/icon.png"/>
        <meta property="og:image:width" content="2727"/>
        <meta property="og:image:height" content="1952"/>
        <meta property="og:site_name" content="Cryptocademy"/>
        <meta property="og:type" content="Trading,Investment,Courses,Learning"/>
        <meta name="language" content="EN"/>
        <meta name="author" content="Cryptocademy"/>
      </Head>
        <Nav/>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                <span className="block w-full text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Submit a request</span>
            </h2>
            <form action="https://formsubmit.co/webdripdev@gmail.com" method="POST">
                
                <div className="relative z-0 mb-6 max-w-2xl group">
                    <input type="text" name="name" className="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required />
                    <label htmlFor="name" className="absolute text-lg  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                </div>

                <div className="relative z-0 mb-6 max-w-2xl group">
                    <input type="email" name="email" className="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required/>
                    <label htmlFor="email" className="absolute text-lg  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <div className='max-w-2xl my-8'>
                    <label htmlFor="message"  className="block  mb-2 text-lg  font-medium text-gray-900 dark:text-gray-400 ">Your message</label>
                    <textarea id="message" type="text" name="message" rows="4" className="block p-2.5 w-full text-lg  rounded-lg border border-gray-600 placeholder-gray-400 text-white  bg-gray-900 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                </div>

                <button type="submit" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">Submit</button>
            </form>


        </div>
        <Footer/>
    </>
  )
}

export default contact