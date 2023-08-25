import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Logo from "../app/logoRRP.png";
import Layout from "../app/layout";
import Footer from "../components/Footer";

export default function Pay() {
  return (
    <div className="flex flex-col h-screen bg-green-500 font-serif">
      <Head>
        <title>Payment information for Royal Ridges Paintball</title>
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

      <div className="flex flex-col flex-grow max-w-5xl mx-auto mt-8">
        <h1 className="font-semibold text-xl text-center mb-4">
          Open Play (Paintball and Airsoft)
        </h1>
        <p className="mb-4">
          So, you think you have what it takes to play in the big leagues? Well
          there is only one way to find out. Click the link below to secure your
          spot on the field{" "}
          <span className="text-sm italic">
            (Keep in mind cell reception is very limited at the field so it is
            best to pay before arriving. Sometimes we have Starlink setup, but
            DO NOT count on it)
          </span>
          .
        </p>
        <div className="flex justify-center w-full mb-8">
          <Link
            href="https://buy.stripe.com/5kA2an6eP9JG0cE4gh"
            className="bg-purple-400 px-1 rounded-md text-3xl text-slate-200 hover:bg-slate-200 hover:text-purple-400"
          >
            Open Play (Paintball or Airsoft)
          </Link>
        </div>
        <hr />
        <h1 className="font-semibold text-xl text-center mb-4">
          Private Groups (Paintball ONLY)
        </h1>
        <p className="mb-4">
          Looking for some good ole fashioned workplace bonding? Or maybe one
          last hurrah with the boys/girls before they say &quot;I Do&quot; and
          you will never see them again? Then look no further than Royal Ridges
          Paintball{" "}
          <span className="text-sm italic">
            (Keep in mind cell reception is very limited at the field so it is
            best to pay before arriving. Sometimes we have Starlink setup, but
            DO NOT count on it)
          </span>
          .
        </p>
        <div className="flex justify-center w-full">
          <Link
            href="https://buy.stripe.com/5kA2an6eP9JG0cE4gh"
            className="bg-purple-400 px-1 rounded-md text-3xl text-slate-200 hover:bg-slate-200 hover:text-purple-400"
          >
            Private Groups
          </Link>
        </div>
      </div>
      <div className="w-full sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
