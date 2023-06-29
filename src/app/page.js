import Image from 'next/image';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <main>
        <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
          <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            Royal Ridges Paintball&nbsp;
          </p>
        </div>
        <Image
          src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1688049329/royalRidges/paintball_ajydhr.jpg'
          alt='paintball warrior doctored image'
          height={700}
          width={900}
        />
      </main>
      <div className='grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <p>No one likes eating paint, use the doritos!</p>
      </div>
      <Footer />
    </div>
  );
}
