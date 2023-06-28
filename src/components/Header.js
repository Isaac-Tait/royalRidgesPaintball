export default function Header() {
  return (
    <div>
      <div className='w-full flex justify-between bg-blue-900'>
        <h1 className='text-3xl font-semibold text-red-400'>
          This is my header!
        </h1>
      </div>
      <div className=''>
        <ul className='flex justify-between bg-blue-400'>
          <li className='text-red-400'>Testing</li>
          <li className='text-red-400'>Testing</li>
          <li className='text-red-400'>Testing</li>
        </ul>
      </div>
    </div>
  );
}
