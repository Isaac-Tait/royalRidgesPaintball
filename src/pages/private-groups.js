import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Logo from "../app/logoRRP.png";
import Layout from "../app/layout";
import Footer from "../components/Footer";

export default function PrivateGroups() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-[url("https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] w-full bg-cover bg-center overflow-hidden'>
        <Head>
          <title>Private Groups at Royal Ridges Paintball</title>
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

        <div className="flex items-center justify-center max-w-4xl md:max-w-7xl mx-auto md:rounded-lg my-4 px-2 bg-green-500">
          {/* Content */}
          <div className="max-w-5xl mx-auto font-serif">
            <h1 className="mb-6 text-center font-extrabold font-sans text-xl md:text-4xl">
              Private Groups
            </h1>
            <p
              className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
            >
              Are you looking for a fun event to celebrate a birthday, a
              bachelor/bachelorette party, a family gathering, or a company
              event? Then book a fun two-hour private paintball experience at
              our field. Your party will have access to three different styles
              of playing fields and many different game scenarios and will have
              a party manager/referee to keep your event fun and safe. All
              charges cover the cost of a paintball mask, a marker, paint-balls,
              and up to two hours of game play.
            </p>
            <div className="flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScO7O9Uw4m11LPZaY_gxWuUf_chLBMUBoEGg9hmXoG00C8qGw/viewform?embedded=true"
                width="100%"
                height="1353"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
            <p className="mt-4 mb-6 text-center">
              Interested in other dates/times? Email{" "}
              <a
                href="emailto:joshua@royalridges.org"
                className="text-white hover:underline hover:text-yellow-600"
              >
                joshua@royalridges.org
              </a>
              &nbsp;to arrange alternate dates/times.
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
