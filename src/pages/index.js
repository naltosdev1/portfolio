import { Inter } from 'next/font/google'
import Project from './projet';
import Technologies from './technologies';
import About from './about';
import Header from './head';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />

      <main className='flex flex-col max-w-screen m-auto p-20 w-1/2 overflow-hidden'>
        <section className='flex flex-col mb-4'>
          <About />
          <Technologies />
          <Project />
          <Footer />
        </section>
      </main>
    </>
  )
}
