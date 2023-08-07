import Link from "next/link";

export default function Pay() {
  return (
    <div className="bg-slate-300 w-10 h-10 md:w-20 md:h-20 rounded-full grid place-items-center">
      <Link
        href="https://buy.stripe.com/4gweX932Df40aRi288"
        className="text-sm md:text-lg font-sans font-regular md:font-bold md:tracking-widest hover:underline hover:text-purple-400"
      >
        Pay
      </Link>
    </div>
  );
}
