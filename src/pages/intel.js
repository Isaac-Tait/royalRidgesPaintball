import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Logo from "../app/logoRRP.png";
import Layout from "../app/layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-[url("https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] w-full bg-cover bg-center overflow-hidden'>
        <Head>
          <title>About Royal Ridges Paintball</title>
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

        <div className="flex grow items-center justify-center md:max-w-7xl md:mx-auto md:rounded-lg my-4 px-2 bg-green-500">
          {/* Content */}
          <div className="max-w-5xl mx-auto font-serif">
            <p
              className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
            >
              Royal Ridges Paintball was started in 2006. We pride ourselves on
              being a family friendly establishment. Feel free to bring the
              whole family down, we have access to the jump pillow and other
              kid/family friendly activities. We have also held speedball
              tournaments for several years and therefore know how to run a
              smooth ship.
            </p>
            <div className="flex justify-center mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.699037602509!2d-122.46808778763972!3d45.877330605657896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549435833d209c49%3A0x74393d684f3af730!2sRoyal%20Ridges%20Paintball!5e0!3m2!1sen!2sus!4v1694110961678!5m2!1sen!2sus"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="font-sans text-center my-6">
              Make sure you sign the waiver before you head up{" "}
              <span role="img" aria-label="backhandIndexPointingDown">
                &#128071;
              </span>
            </p>
            <div className="flex justify-center my-4">
              <Link
                href="https://waiver.smartwaiver.com/v/rrrpaintball/"
                className="text-yellow-600 hover:text-purple-500 bg-slate-300 p-1 rounded-md font-serif"
              >
                Paintball&nbsp;Waiver
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
