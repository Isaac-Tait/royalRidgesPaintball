import Image from 'next/image';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
        {/* Header */}
        <div>
          <p className='text-center font-medium text-3xl py-2 font-sans text-yellow-500'>
            Royal Ridges Paintball&nbsp;
          </p>
        </div>
        {/* Body */}
        <div className='flex-grow heropattern-bubbles-gray-400'>
          <div className='pt-12'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1688049329/royalRidges/paintball_ajydhr.jpg'
            alt='paintball warrior doctored image'
            width={700}
            height={900}
          />
          </div>
          <h3 className='mt-12 text-center font-serif bg-white opacity-80 rounded-lg text-indigo-600'>The best location for paintball action in the Battle Ground/Vancouver Washington area</h3>
        </div>
      {/* Footer */}
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
}
