import Image from 'next/image';
import Link from 'next/link';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col h-screen bg-gray-300'>
        {/* Header */}
        <div>
          <p className='font-semibold text-xl md:text-5xl text-center font-sans text-yellow-600 md:pb-4 tracking-wider ml-2'>
            Royal Ridges Paintball&nbsp;
          </p>
        </div>
        {/* Body */}
        <div className='grow md:heropattern-bubbles-green-600'>
          <div className='grid grid-cols-1 gap-2 lg:grid-cols-4 mt-1 md:mt-4'>
            <div className='hidden lg:block bg-green-600 mx-6 rounded-xl'>
              <h1 className='font-sans text-center font-bold text-xl text-slate-900 tracking-widest'>
                Menu Navigation
              </h1>
              <div className='text-lg font-serif'>
                <ul className='flex flex-col justify-between px-2'>
                  <Link className='text-yellow-700' href='/blog'>
                    ⁍ Blog
                  </Link>
                  <Link className='text-yellow-700' href='/rules'>
                    ⁍ Rules
                  </Link>
                  <Link className='text-yellow-700' href='/about'>
                    ⁍ About
                  </Link>
                </ul>
              </div>

              <div className='text-xs flex'>
                ©1976 - {new Date().getFullYear()}, Built with ♥ by{' '}
                <Link
                  href='https://mountaintopcoding.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-indigo-400 text-amber-600'
                >
                  mountainTopCoding(🏔);
                </Link>
              </div>
            </div>
            <div className='col-span-2 mx-auto'>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1688049329/royalRidges/paintball_ajydhr.jpg'
                alt='paintball warrior doctored image'
                width={700}
                height={900}
                placeholder='blur'
                blurDataURL='https://image-component.nextjs.gallery/placeholder'
                className='md:rounded-xl'
              />
            </div>
          </div>

          <h3 className='text-center font-serif text-slate-800 text-base md:text-2xl lg:bg-white lg:opacity-80 max-w-3xl mx-auto mt-12 overflow-clip'>
            The best location for paintball action in the Battle
            Ground/Vancouver Washington area
          </h3>
        </div>
      </div>
      {/* <1024px width Footer */}
      <div className='block lg:hidden fixed bottom-0 w-full'>
        <Footer />
      </div>
      {/* >1024px width Footer  */}
    </div>
  );
}
