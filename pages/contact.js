import React from 'react'
import { Nav } from '../components/Navbar'
import { Footer } from '../components/Footer'
const contact = () => {
  return (
    <>
        <Nav/>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                <span className="block w-full text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Submit a request</span>
            </h2>
            {/* https://formsubmit.co/el/wilizi */}
            <form action="https://formsubmit.co/webdripdev@gmail.com" method="POST">
                
                <div class="relative z-0 mb-6 max-w-2xl group">
                    <input type="text" name="name" class="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required />
                    <label for="name" class="absolute text-lg  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                </div>

                <div class="relative z-0 mb-6 max-w-2xl group">
                    <input type="email" name="email" class="block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required/>
                    <label for="email" class="absolute text-lg  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <div className='max-w-2xl my-8'>
                    <label for="message"  className="block  mb-2 text-lg  font-medium text-gray-900 dark:text-gray-400 ">Your message</label>
                    <textarea id="message" type="text" name="message" rows="4" class="block p-2.5 w-full text-lg  rounded-lg border border-gray-600 placeholder-gray-400 text-white  bg-gray-900 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                </div>

                <button type="submit" class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">Submit</button>
            </form>


        </div>
        <Footer/>
    </>
  )
}

export default contact