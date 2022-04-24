import { Nav } from '../components/Navbar'
import { Footer } from '../components/Footer'
const faq = () => {
    return (
    <section>
      <Nav/>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="block w-full text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">F.A.Q.</span>
            </h2>

          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">

              <div>
                <p className="mb-4 text-xl font-medium text-white">
                  Does it involve real money?
                </p>
                <p className="text-gray-200">
                    No, cryptocademy offers it's users virtual usd to buy and sell crypto currency.
                </p>
              </div>

              <div>
                <p className="mb-4 text-xl font-medium text-white">
                  How to deposit money into cryptocademy?
                </p>
                <p className="text-gray-200">
                Cryptocademy is NOT a wallet, exchange or escrow service of any form. Please do not accept any offers from anyone claiming to provide you with a way to deposit anything onto the Cryptocademy website or Mobile App. The only deposit we will accept and wholeheartedly appreciate would be a kind donation from you to buy us a cup of coffee! You can find our donation addresses at the footer of our website.
                </p>
              </div>

              <div>
                <p className="mb-4 text-xl font-medium text-white">
                  What are the future plans of cryptocademy?
                </p>
                <p className="text-gray-200">
                We have plans to help users to learn more about cryptocurrency & trading. Currently we only have a global leaderboard with the top 100 users. We're planning to add a feature where users can create custom rooms and compete with their friends.
                Do drop us an email at webdripdev@gmail.com with any suggestions or feedback that you may have for us. We would appreciate that!
                </p>
              </div>
              
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium text-white">
                  Can cryptocademy be trusted?
                </p>
                <p className="text-gray-200">
                 Cryptocademy provides a real-time, risk-free trading simulator that allows you to msater crypto trading and investing at zero cost. Hone your skills and feel confident with crypto trading and investing.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium text-white">
                  How can i contact support?
                </p>
                <p className="text-gray-200">
                    You can email us at webdripdev@gmail.com or fill out the contact form on our website.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium text-white">
                  What source does cryptocademy use for its data?
                </p>
                <p className="text-gray-200">
                    You can email us at webdripdev@gmail.com or fill out the contact form on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    );
  };

export default faq