import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head><title>Wancla</title></Head>
      <Navbar/>
      <Hero/>
      <Services/>
      <Footer/>
    </div>   
  )
}
