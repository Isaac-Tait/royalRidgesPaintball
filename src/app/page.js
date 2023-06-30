import Image from 'next/image';
import Link from 'next/link';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col h-screen bg-[url("https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] w-full bg-cover bg-center'>
        {/* Header */}
        <div>
          <p className='font-semibold text-xl md:text-5xl text-center font-sans text-yellow-400 md:pb-4 tracking-wider ml-2'>
            Royal Ridges Paintball&nbsp;
          </p>
        </div>
        {/* Body */}
        <div className=''>
          <div className='grid grid-cols-1 gap-2 lg:grid-cols-4 mt-1 md:mt-4'>
          <div></div>
            {/* <div className='hidden lg:block bg-green-600 mx-6 rounded-xl'>
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
            </div> */}
            <div className='col-span-2 mx-auto'>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1688049329/royalRidges/paintball_ajydhr.jpg'
                alt='paintball warrior doctored image'
                width={500}
                height={700}
                placeholder='blur'
                blurDataURL='https://image-component.nextjs.gallery/placeholder'
                className='md:rounded-xl'
              />
            </div>
          </div>

          <h3 className='text-center font-sans tracking-widest text-slate-900 text-base md:text-2xl bg-green-500 rounded-xl max-w-5xl mx-auto mt-2 lg:mt-12'>
            The best location for paintball action in the Battle
            Ground/Vancouver Washington area
          </h3>
        </div>
      </div>
      {/* <1024px width Footer */}
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
      {/* >1024px width Footer  */}
    </div>
  );
}
