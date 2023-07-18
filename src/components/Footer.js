import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-green-500">
      <h1 className="font-sans text-center text-2xl text-slate-900">
        Menu Navigation
      </h1>
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="text-lg font-serif">
          <ul className="flex justify-between px-2">
            <Link className="text-yellow-400" href="/blog">
              ⁍ Blog
            </Link>
            <Link className="text-yellow-400" href="/open-play">
              ⁍ Open Play
            </Link>
            <Link className="text-yellow-400" href="/rules">
              ⁍ Rules
            </Link>
            <Link className="text-yellow-400" href="/about">
              ⁍ About
            </Link>
          </ul>
        </div>

        <div className="text-xs text-center w-full mt-2">
          ©1978 - {new Date().getFullYear()}, Built with ♥ by{" "}
          <Link
            href="https://mountaintopcoding.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-yellow-600"
          >
            mountainTopCoding(🏔);
          </Link>
        </div>
      </div>
    </div>
  );
}
