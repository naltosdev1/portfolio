import profilePicture from '../../public/pp.jpg';
import Image from 'next/image'

export default function About(){
    return(
        <>
        <div className='mr-0 mb-4'>
            <Image className='h-20 w-20 rounded-full border-solid border-2 border-blue-500 transition duration-150 ease-in-out hover:rotate-180' src={profilePicture} alt='Une image' />
        </div>
        <div className='w-auto sm:w-auto'>
            <h1 className='text-white text-3xl font-semibold font-roboto pb-1'>Hi, I'm Naltos.</h1>
            <div className=''>
                <h2 className='text-white text-3xl font-semibold font-roboto py-1'>I'm a French <a className='text-blue-400 hover-underline-animation text-3xl font-semibold font-roboto'>Developer.</a></h2>
            </div>
            <p className='py-1 test-2xl text-white font-semibold font-roboto'>I principaly work with ExpressJS and i'm currently learn PHP. I learn backend and frontend technology since few months now. If you wan't to work with me, send me a message at <a className='font-semibold font-roboto text-blue-400'>Naltos#3572</a>.</p>
        </div>
        </>
    )
}