import marketImg from '../assets/images/showcase/market.png'
import coinDetails from '../assets/images/showcase/showcase2.png'
import portfolio from '../assets/images/showcase/showcase3.png'
import leaderboard from '../assets/images/showcase/showcase4.png'
import news from '../assets/images/showcase/showcase5.png'
import courses from '../assets/images/showcase/showcase6.png'
import Image from 'next/image'

export const Feature = () => {
    return (
        <section id="feature">
            <div className="grid items-center grid-cols-1 mb-24 lg:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div className="px-4 lg:px-12 xl:px-28 ">
                    <p className="text-3xl  lg:text-4xl xl:text-5xl text-white font-bold text-center lg:text-left">
                        Discover the future of digital finance.
                    </p>

                    <p className="mt-4 md:mt-8  text-gray-300 text-lg text-center lg:text-left ">
                    Real-time, risk-free trading simulator that 
                    allows you to master crypto trading at zero cost. 
                    Buy from over 10k+ coins using virtual usd 
                    and start your trading journey 
                    </p>
                </div>
                <div className='mx-4 lg:mx-0'>
                    <Image
                        src={marketImg}
                        alt="Cryptocademy"
                        layout='responsive'
                        placeholder="blur"
                        className='rounded-xl lg:rounded-l-2xl'
                    />
                </div>
            </div>

            <div className="grid flex-col-reverse items-center grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
                <div className="px-4 lg:px-12 xl:px-28 order-none lg:order-2">
                    <p className="text-3xl  lg:text-4xl xl:text-5xl text-white font-bold text-center lg:text-left">
                        Analysis of coins
                    </p>

                    <p className="mt-4 md:mt-8  text-gray-300 text-lg text-center lg:text-left ">
                    See detailed cryptocurrency price change 
                    candlestick charts, USD converter, social 
                    media trends and followers of over 10k+ coins 
                    </p>
                </div>

                <div >
                    <Image
                        src={coinDetails}
                        alt="Cryptocademy"
                        layout='responsive'
                        placeholder="blur"
                        className='rounded-xl lg:rounded-r-2xl'
                    />
                </div>
            </div>

            <div className="grid items-center grid-cols-1 mb-24 lg:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
                <div className="px-4 lg:px-12 xl:px-28 mt-20">
                    <p className="text-3xl  lg:text-4xl xl:text-5xl text-white font-bold text-center lg:text-left">
                        Keep track of your virtual portfolio.
                    </p>

                    <p className="mt-4 md:mt-8  text-gray-300 text-lg text-center lg:text-left ">
                    You decide how to utilize mock  $100000 virutal USD! 
                    Buy, sell, trade, and profit🚀🚀🚀. 
                    Learn how to become a savvy investor with cryptocademy. 
                    </p>
                </div>
                <div className='mx-4 lg:mx-0'>
                    <Image
                        src={portfolio}
                        alt="Cryptocademy"
                        layout='responsive'
                        placeholder="blur"
                        className='rounded-xl lg:rounded-l-2xl'
                    />
                </div>
            </div>

            
            <div className="grid flex-col-reverse items-center grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
                <div className="px-4 lg:px-12 xl:px-28 order-none lg:order-2">
                    <p className="text-3xl  lg:text-4xl xl:text-5xl text-white font-bold text-center lg:text-left">
                        Compete Globally
                    </p>

                    <p className="mt-4 md:mt-8  text-gray-300 text-lg text-center lg:text-left ">
                    Do you have what it takes to be a better investor, compete globally with other users and become a better investor.
                    </p>
                </div>

                <div className='mx-4 lg:mx-0'>
                    <Image
                        src={leaderboard}
                        alt="Cryptocademy"
                        layout='responsive'
                        placeholder="blur"
                        className='rounded-xl lg:rounded-r-2xl'
                    />
                </div>
            </div>

            
            <div className="grid items-center grid-cols-1 mb-24 lg:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
                <div className="px-4 lg:px-12 xl:px-28">
                    <p className="text-3xl  lg:text-4xl xl:text-5xl text-white font-bold text-center lg:text-left mt-20">
                        Daily Top Cryptocurrencies News
                    </p>

                    <p className="mt-4 md:mt-8  text-gray-300 text-lg text-center lg:text-left ">
                        Get the latest news on Cryptocurrency and stay up-to-date on major crypto like Bitcoin, Ethereum etc.. 
                    </p>
                </div>
                <div className='mx-4 lg:mx-0'>
                    <Image
                        src={news}
                        alt="Cryptocademy"
                        layout='responsive'
                        placeholder="blur"
                        className='rounded-xl lg:rounded-l-2xl'
                    />
                </div>
            </div>
                  
            <div className="grid flex-col-reverse items-center grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 ">
                <div className="px-4 lg:px-12 xl:px-28 order-none lg:order-2">
                    <p className="text-3xl  lg:text-4xl xl:text-5xl text-white font-bold text-center lg:text-left">
                    Are you new to 
                    crypto? 
                    </p>

                    <p className="mt-4 md:mt-8  text-gray-300 text-lg text-center lg:text-left ">
                    We curated the best resources we 
                    could find on the Internet to learn about 
                    cryptocurrencies, trading, blockchain, 
                    and the web 3.0.
                    </p>
                </div>

                <div className='mx-4 lg:mx-0'>
                    <Image
                        src={courses}
                        alt="Cryptocademy"
                        layout='responsive'
                        placeholder="blur"
                        className='rounded-xl lg:rounded-r-2xl'
                    />
                </div>
            </div>

        </section>
    );
  };