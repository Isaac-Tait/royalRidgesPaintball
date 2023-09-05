import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-green-500">
      <h1 className="font-sans text-center text-lg text-slate-900 pb-2">
        Menu Navigation
      </h1>
      <hr />
      <div className="grid grid-rows-2 grid-flow-col mt-2">
        <div className="text-sm md:text-lg font-serif drop-shadow-xl">
          <ul className="flex justify-between px-1">
            <Link
              className="text-purple-500 hover:text-pink-700 bg-slate-300 p-1 rounded-md"
              href="/blog"
            >
              ⁍ Blog
            </Link>
            <Link
              className="text-purple-500 hover:text-yellow-500 bg-slate-300 p-1 rounded-md"
              href="/rules"
            >
              ⁍ Rules
            </Link>
            <Link
              className="text-purple-500 hover:text-green-400 bg-slate-300 p-1 rounded-md"
              href="/open-play"
            >
              ⁍ Open Play
            </Link>

            <Link
              className="text-purple-500 hover:text-blue-400 bg-slate-300 p-1 rounded-md"
              href="/private-groups"
            >
              ⁍ Private Groups
            </Link>
            <Link
              className="text-purple-500 hover:text-orange-500 bg-slate-300 p-1 rounded-md"
              href="/about"
            >
              ⁍ About
            </Link>
          </ul>
        </div>

        <div className="text-xs text-center w-full mt-2 font-mono">
          ©1978-{new Date().getFullYear()}, Built with ♥ by{" "}
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
