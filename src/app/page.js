import Image from "next/image";
import Link from "next/link";

import Logo from "../app/logoRRP.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-green-500">
        <div className="grow">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 mt-1 md:mt-4">
            <div></div>
            <div className="col-span-2 mx-auto">
              <Image
                src={Logo}
                alt="Logo for royal ridges paintball"
                height={500}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-slate-300 w-10 h-10 md:w-20 md:h-20 rounded-full grid place-items-center drop-shadow-xl">
            <Link
              href="/pay"
              className="text-sm md:text-lg font-sans font-regular md:font-bold md:tracking-widest text-yellow-600 hover:text-blue-400"
            >
              Pay
            </Link>
          </div>
          <p className="text-center font-sans tracking-widest text-slate-900 text-base md:text-2xl bg-green-500 lg:rounded-xl max-w-5xl mx-auto mt-2 lg:mt-12">
            The best location for paintball & airsoft in the Battle
            Ground/Vancouver Washington area
          </p>
        </div>

        <div className="sticky bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
