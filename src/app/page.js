import Image from 'next/image';

export default function Home() {
  return (
    <>
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

          <h3 className='text-center font-sans tracking-widest text-slate-900 text-base md:text-2xl bg-green-500 lg:rounded-xl max-w-5xl mx-auto mt-2 lg:mt-12'>
            The best location for paintball action in the Battle
            Ground/Vancouver Washington area
          </h3>
        </div>
      </div>
    </>
  );
}
