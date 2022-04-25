import Head from 'next/head'
import { Nav } from '../components/Navbar'
import { Feature } from '../components/Feature'
import { Footer } from '../components/Footer'
import Hero from '../components/Hero'
import Cta from '../components/Cta'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cryptocademy - Learn to invest like a pro.</title>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="Cryptocademy is an app that teaches people how to trade cryptocurrencies and invest in coins like bitcoin,ethereum etc. User can analyze market data by viewing charts, top daily cryptocurrency news. Through our curated blogs and courses,users can also learn more about cryptocurrency and blockchain concepts."/>
        <link rel="canonical" href="https://cryptocademy.webdrip.in/"/>
        <meta property="og:title" content="Learn to invest like a pro"/>
        <meta property="og:description" content="Cryptocademy is an app that teaches people how to trade cryptocurrencies and invest in coins like bitcoin,ethereum etc. User can analyze market data by viewing charts, top daily cryptocurrency news. Through our curated blogs and courses,users can also learn more about cryptocurrency and blockchain concepts."/>
        <meta property="og:image" content="/cryptocademy-logo-sideways-light.png"/>
        <meta property="og:image:width" content="2727"/>
        <meta property="og:image:height" content="1952"/>
        <meta property="og:site_name" content="Cryptocademy"/>
        <meta property="og:type" content="Trading,Investment,Courses,Learning"/>
        <meta name="language" content="EN"/>
        <meta name="author" content="Cryptocademy"/>
      </Head>
      <Nav/>
      <Hero/>
      <Feature/>
      <Cta/>
      <Footer/>
    </div>
  )
}
