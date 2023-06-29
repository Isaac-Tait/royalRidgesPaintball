import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <div className='w-full flex justify-between bg-blue-900'>
        <h1 className='text-6xl font-semibold text-red-400 py-4 ml-2'>
          Royal Ridges Paintball
        </h1>
      </div>
      <div className=''>
        <ul className='flex justify-between bg-blue-400'>
          <Link className='text-red-400' href='/blog'>
            Blog
          </Link>
          <Link className='text-red-400' href='/rules'>
            Rules
          </Link>
          <Link className='text-red-400' href='/about'>
            About
          </Link>
        </ul>
      </div>
    </div>
  );
}
