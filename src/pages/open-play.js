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
            <h1 className="mb-6 text-center font-extrabold font-sans text-4xl">
              Open Play
            </h1>
            <p
              className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
            >
              Royal Ridges loves to spread the love for paintball, and a unique
              way we get to drive the sport forward is to host open play days.
              This allows individuals or small groups of friends and paintball
              teams to come together with other like-minded people and spend the
              day playing some fun paintball games and scenarios here at our
              course. Our Paintball open plays are typically scheduled on the
              Third Saturday of every month. The first game starts at 10 am The
              last game is at 3 pm
            </p>
            <h3 className="font-bold text-2xl text-center py-4">Airsoft</h3>
            <p className="mb-4">
              Every first Saturday of the month, we open our field up for our
              Airsoft Openplays. This is a newer addition to our monthly
              offerings and a fast-growing event. Airsoft rentals are available
              through a third-party provider, or you can bring your own
              equipment out and join in the fun. The first game starts at 10 am
              The last game is at 3 pm
            </p>
            <hr />
            <p className="my-6 text-center">
              For prices and to secure your spot on the gauntlet click the link
              below
              <span role="img" aria-label="backhandIndexPointingDown">
                &#128071;
              </span>
            </p>
            <div className="flex justify-center w-full">
              <Link
                href="https://buy.stripe.com/5kA2an6eP9JG0cE4gh"
                target="__blank"
                className="bg-purple-400 px-1 rounded-md text-3xl text-slate-200 hover:bg-slate-200 hover:text-purple-400"
              >
                Get on the Field
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full sticky bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
