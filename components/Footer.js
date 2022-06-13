import Image from 'next/image'
import logo from '../assets/svg/cryptocademy-logo-sideways-light.svg'
import Link from "next/link";
import {AiOutlineTwitter,AiFillLinkedin,AiFillInstagram } from "react-icons/ai";
export const Footer = () => {
    return (
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              title="Company"
            >
              <div className="inline-flex items-center">
                <Image
                    src={logo}
                    alt="Cryptocademy"
                    width={250} 
                    height={108} 
                    // placeholder="blur"
                />
              </div>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-300">
              Cryptocademy provides a real-time, risk-free trading simulator that allows you to msater crypto trading and investing at zero cost. Hone your skills and feel confident with crypto trading and investing.
              </p>
            </div>
          </div>
          <div className="space-y-2 pt-10 text-sm">
            <Link href="/#features">
              <p className="cursor-pointer text-base  tracking-wide text-gray-300">
                Features
              </p>
            </Link>
            <Link href="https://cryptocademy.netlify.app/signup">
              <p className="text-base cursor-pointer  tracking-wide text-gray-300">
                Create Account
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-base cursor-pointer  tracking-wide text-gray-300">
                Contacts
              </p>
            </Link>
            <Link href="/faq">
              <p className="text-base cursor-pointer tracking-wide text-gray-300">
                F.A.Q
              </p>
            </Link>
            <Link href="/privacy">
              <p className="text-base cursor-pointer tracking-wide text-gray-300">
                Privacy Policy
              </p>
            </Link>
            
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://twitter.com/NarottamCodez"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <AiOutlineTwitter className='w-7 h-7 text-gray-200'/>
              </a>
              <a
                href="https://www.instagram.com/_webdrip/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <AiFillInstagram className='w-7 h-7 text-gray-200'/>
                
              </a>
              <a
                href="https://www.linkedin.com/in/narottam-sahu-40008a1bb/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <AiFillLinkedin className='w-7 h-7 text-gray-200'/>
                
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Get started with your virtual portfolio for free.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-200">
            © Copyright 2022 Cryptocademy. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {/* <li>
                
                href="/"
                className="text-sm text-gray-300 transition-colors duration-300 "
              >
                F.A.Q
              </a>
            </li> */}
            <li>
              <Link
                href="/privacy"
                className="text-sm text-gray-300 transition-colors duration-300 "
              >
                Privacy Policy
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    );
  };