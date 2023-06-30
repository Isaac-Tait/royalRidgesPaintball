import Head from 'next/head';

import Layout from '../app/layout';

export default function About() {
  return (
    <>
      <Layout>
        <div className='flex min-h-screen bg-slate-100 flex-col items-center justify-center py-2'>
          <Head>
            <title>About Royal Ridges Paintball</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <h1 className='text-6xl absolute top-10 text-center font-extrabold text-yellow-400 font-sans w-full bg-green-500 py-4'>
            About Royal Ridges Paintball
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
              <p
                className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left mt-4'
              >
                Cras blandit lectus dui, at auctor velit sodales
                vitae. Nam sodales, turpis sit amet ornare feugiat,
                odio quam egestas elit, rhoncus auctor leo tellus nec
                turpis. Aenean non enim iaculis, sollicitudin enim
                non, commodo leo. Nam aliquet molestie risus et
                imperdiet. Ut molestie euismod nulla vel bibendum.
                Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Nam vulputate et
                libero id bibendum. Fusce nibh nulla, molestie non
                lobortis at, rutrum ac orci. Proin porta volutpat
                ipsum id pulvinar. Nunc vulputate ultricies elit.
                Praesent vel augue justo. Mauris fermentum tortor
                vitae ipsum vestibulum euismod. Donec sed risus sit
                amet justo efficitur rhoncus id in nulla. Sed vel
                volutpat dui. Morbi nulla velit, volutpat sed tortor
                in, aliquet tempor sapien. Sed congue aliquet lacinia.
                Fusce sollicitudin bibendum semper. Nullam quis dolor
                at sem rhoncus sollicitudin. Vestibulum viverra, odio
                vitae facilisis venenatis, mauris est posuere arcu, id
                molestie velit metus viverra ante. Sed id lacus
                faucibus diam mattis dictum. Proin magna nisl,
                lobortis vel pharetra sed, sodales vitae nibh. Sed
                sodales turpis scelerisque, porta felis ut, sodales
                tellus.
              </p>
              <p
                className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left mt-4'
              >
                Proin ut varius sem. Nulla vitae consectetur risus.
                Sed et sem sem. Phasellus quis scelerisque purus.
                Aenean congue porta quam ultrices cursus. Vivamus
                ipsum mauris, maximus vitae tortor dapibus,
                scelerisque vulputate nunc. Mauris id lectus eu risus
                maximus laoreet pharetra tincidunt dui. In scelerisque
                nisl at nibh cursus pulvinar. Nam feugiat placerat
                nunc, non pellentesque arcu auctor eu. Mauris lacus
                libero, rhoncus sit amet ullamcorper nec, vehicula non
                odio. Pellentesque eleifend sed elit vel gravida.
                Suspendisse laoreet risus nec imperdiet sodales.
                Vestibulum eu scelerisque lectus, eget elementum
                mauris. Phasellus elementum fermentum augue, vitae
                auctor odio porttitor vel. Proin ut erat vel odio
                eleifend elementum.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
