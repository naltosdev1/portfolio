import typescript from '../../public/png-transparent-typescript-hd-logo-thumbnail.png';
import javascript from '../../public/JavaScript-logo.png';
import nodejs from '../../public/nodejs-logo-FBE122E377-seeklogo.com.png';
import nextjs from '../../public/nextjs-icon.svg';
import php from '../../public/php.svg';
import Image from 'next/image'

export default function Technologies(){
    return(
        <>
        <div className='flex-col mt-12 flex'>
            <h1 className='text-white text-3xl font-semibold font-roboto'>Technologies 🚀</h1>
            <h2 className='text-white text-xl font-normal font-roboto mt-2'>Some of the technologies I use for my projects.</h2>
            <div className='grid grid-cols-3 gap-2 mt-6'>
              <div className='relative p-4 w-70 h-15 flex bg-neutral-800 rounded border-b-4 border-blue-600 transition duration-150 ease-in-out hover:shadow-md hover:shadow-black'>
                <Image src={typescript} className='w-10 h-10 transition duration-150 ease-in-out hover:skew-y-12' alt='Une image'/>
                <h2 className='pl-2 pt-1 font-roboto text-xl text-white font-semibold bg-transparent'>Typescript</h2>
                <p className='w-14 pl-0.5 h-6 flex absolute top-1 right-3 text-orange-500 font-semibold font-roboto rounded'>Novice</p>
              </div>
              <div className='relative p-4 w-70 h-15 flex bg-neutral-800 rounded border-b-4 border-blue-600 transition duration-150 ease-in-out hover:shadow-md hover:shadow-black'>
                <Image src={javascript} className='w-10 h-10 transition duration-150 ease-in-out hover:skew-y-12' alt='Une image'/>
                <h2 className='pl-2 pt-1 font-roboto text-xl text-white font-semibold bg-transparent'>Javascript</h2>
                <p className='flex absolute top-1 right-3 text-green-600 font-semibold font-roboto'>Amateur</p>
              </div>
              <div className='relative p-4 w-70 h-15 flex bg-neutral-800 rounded border-b-4 border-blue-600 transition duration-150 ease-in-out hover:shadow-md hover:shadow-black'>
                <Image src={nodejs} className='w-10 h-11 transition duration-150 ease-in-out hover:skew-y-12' alt='Une image'/>
                <h2 className='pl-2 pt-1 font-roboto text-xl text-white font-semibold bg-transparent'>ExpressJS</h2>
                <p className='flex absolute top-1 right-3 text-green-600 font-semibold font-roboto'>Amateur</p>
              </div>
              <div className='relative p-4 w-70 h-15 flex bg-neutral-800 rounded border-b-4 border-blue-600 transition duration-150 ease-in-out hover:shadow-md hover:shadow-black'>
                <Image src={nextjs} className='w-10 h-11 transition duration-150 ease-in-out hover:skew-y-12' alt='Une image'/>
                <h2 className='pl-2 pt-1 font-roboto text-xl text-white font-semibold bg-transparent'>NextJS</h2>
                <p className='flex absolute top-1 right-3 text-orange-500 font-semibold font-roboto'>Novice</p>
              </div>
              <div className='relative p-4 w-70 h-15 flex bg-neutral-800 rounded border-b-4 border-blue-600 transition duration-150 ease-in-out hover:shadow-md hover:shadow-black'>
                <Image src={php} className='w-10 h-11 transition duration-150 ease-in-out hover:skew-y-12' alt='Une image'/>
                <h2 className='pl-2 pt-1 font-roboto text-xl text-white font-semibold bg-transparent'>PHP</h2>
                <p className='flex absolute top-1 right-3 text-orange-500 font-semibold font-roboto'>Novice</p>
              </div>
            </div>
        </div>
        </>
    )
}