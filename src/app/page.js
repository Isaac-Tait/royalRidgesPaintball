import Image from 'next/image';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col h-screen bg-slate-200'>
        {/* Header */}
        <div>
          <p className='font-semibold text-xl md:text-5xl text-center font-sans text-yellow-500 md:pb-4'>
            Royal Ridges Paintball&nbsp;
          </p>
        </div>
        {/* Body */}
        <div className='flex-grow md:heropattern-bubbles-gray-400'>
          <div className='flex justify-center mt-1 md:mt-4'>
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

          <h3 className='text-center font-serif text-slate-800 text-base md:text-2xl md:pt-8'>
            The best location for paintball action in the Battle
            Ground/Vancouver Washington area
          </h3>
        </div>
      </div>
      {/* Footer */}
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
}
