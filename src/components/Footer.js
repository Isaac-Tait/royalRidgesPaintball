import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <div className='md:flex items-center justify-between text-xs px-1'>
        <div className='hidden md:block'>
          © 2010 - {new Date().getFullYear()}, Built with{' '}
          <Link
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-indigo-400 hover:text-amber-500'
          >
            Next.js
          </Link>{' '}
          &&nbsp;
          <Link
            href='https://tailwindcss.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-indigo-400 hover:text-amber-500'
          >
            TailwindCSS
          </Link>
          .
        </div>
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
