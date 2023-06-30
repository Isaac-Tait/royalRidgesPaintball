import Head from 'next/head';
// import Link from 'next/link';

import Layout from '../app/layout'

export default function Rules() {
  return (
    <>
      <Layout>
        <div className='flex min-h-screen bg-slate-100 flex-col items-center justify-center py-2'>
          <Head>
            <title>Rules @ Royal Ridges Paintball</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <h1 className='text-6xl absolute top-10 text-center font-extrabold text-yellow-400 font-sans bg-green-500 w-full py-4'>
            Rules @ Royal Ridges Paintball
          </h1>
          <div className='flex items-center justify-center px-16'>
            <div className='relative w-full max-w-xl'>
              <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob '></div>
              <div className='absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
              <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
            </div>
            {/* Content */}
            <div className='max-w-5xl mx-auto'>
              <p
                className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus eget nisi et lectus convallis pretium
                sit amet et neque. Nullam rhoncus pretium tortor quis
                varius. Fusce a mauris sed erat cursus condimentum.
                Aenean tincidunt nisi in maximus tincidunt. Donec sit
                amet lectus in odio porttitor vestibulum. Proin
                sollicitudin semper nulla ac consequat. Quisque in
                sollicitudin neque. Praesent vitae venenatis dui.
                Etiam viverra velit et mi aliquet, sed mollis risus
                sollicitudin. Suspendisse potenti. Duis ut metus urna.
                Cras id mauris sit amet odio pellentesque finibus.
                Duis at nisi quis orci dictum molestie. Fusce
                hendrerit sed nunc eu ullamcorper. Duis efficitur, leo
                sit amet porttitor porttitor, dui massa dapibus massa,
                et dapibus dolor dui tristique nisi. Aliquam ornare,
                libero sit amet venenatis tristique, elit neque semper
                est, at viverra justo dolor id nibh. Phasellus et mi
                sit amet nisi varius maximus id vitae felis. Nullam
                nulla arcu, facilisis id lacus ut, molestie convallis
                odio. Donec imperdiet odio ac leo rhoncus sagittis.
                Morbi ac turpis augue. Donec volutpat varius tellus,
                sed aliquam metus lobortis vitae.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
