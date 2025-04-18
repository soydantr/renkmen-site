import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Renkmen D.O.O.</title>
        <meta name="description" content="AI-powered agency website" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}