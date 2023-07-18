import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Logo from "../app/logoRRP.png";
import Layout from "../app/layout";
import Footer from "../components/Footer";

export default function OpenPlay() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-[url("https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] w-full bg-cover bg-center overflow-hidden'>
        <Head>
          <title>Open Play at Royal Ridges Paintball</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link
          href="/"
          className="text-6xl font-extrabold text-yellow-400 font-sans bg-green-500 max-w-3xl mx-auto rounded-xl"
        >
          <Image
            src={Logo}
            alt="This is the royal ridges logo"
            height={350}
            className="text-center"
          />
        </Link>

        <div className="flex grow items-center justify-center md:max-w-7xl md:mx-auto md:rounded-lg my-4 px-2 bg-green-500 overflow-y-scroll">
          {/* Content */}
          <div className="max-w-5xl mx-auto font-serif">
            <p
              className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget nisi et lectus convallis pretium sit amet et neque. Nullam
              rhoncus pretium tortor quis varius. Fusce a mauris sed erat cursus
              condimentum. Aenean tincidunt nisi in maximus tincidunt. Donec sit
              amet lectus in odio porttitor vestibulum. Proin sollicitudin
              semper nulla ac consequat. Quisque in sollicitudin neque. Praesent
              vitae venenatis dui. Etiam viverra velit et mi aliquet, sed mollis
              risus sollicitudin. Suspendisse potenti. Duis ut metus urna. Cras
              id mauris sit amet odio pellentesque finibus. Duis at nisi quis
              orci dictum molestie. Fusce hendrerit sed nunc eu ullamcorper.
              Duis efficitur, leo sit amet porttitor porttitor, dui massa
              dapibus massa, et dapibus dolor dui tristique nisi. Aliquam
              ornare, libero sit amet venenatis tristique, elit neque semper
              est, at viverra justo dolor id nibh. Phasellus et mi sit amet nisi
              varius maximus id vitae felis. Nullam nulla arcu, facilisis id
              lacus ut, molestie convallis odio. Donec imperdiet odio ac leo
              rhoncus sagittis. Morbi ac turpis augue. Donec volutpat varius
              tellus, sed aliquam metus lobortis vitae.
            </p>
          </div>
        </div>
        <div className="w-full sticky bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
