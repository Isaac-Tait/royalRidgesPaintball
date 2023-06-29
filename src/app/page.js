import Image from 'next/image';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-slate-200'>
      {/* Header */}
      <div>
        <p className='text-center font-semibold text-3xl py-2 font-sans text-yellow-500'>
          Royal Ridges Paintball&nbsp;
        </p>
      </div>
      {/* Body */}
      <div className='md:heropattern-bubbles-gray-400'>
        <div className=''>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1688049329/royalRidges/paintball_ajydhr.jpg'
            alt='paintball warrior doctored image'
            width={700}
            height={900}
          />
        </div>
      </div>
      <div className='flex-grow'>
        <h3 className='text-center font-serif text-slate-800'>
          The best location for paintball action in the Battle
          Ground/Vancouver Washington area
        </h3>
      </div>
      {/* Footer */}
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
}
