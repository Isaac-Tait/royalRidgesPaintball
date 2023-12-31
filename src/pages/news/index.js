import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../../tina/__generated__/client";

import Head from "next/head";
import Image from "next/image";

import Logo from "../../app/logoRRP.png";
import Layout from "../../app/layout";
import Footer from "../../components/Footer";

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data.postConnection.edges;
  return (
    <>
      <div className='flex flex-col min-h-screen bg-[url("https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] w-full bg-cover bg-center'>
        <Head>
          <title>Blog page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link
          href="/"
          className="text-2xl lg:text-6xl bg-green-500 font-extrabold text-yellow-400 font-sans max-w-3xl mx-auto rounded-xl py-4 mb-4"
        >
          <Image
            src={Logo}
            alt="This is the royal ridges logo"
            height={350}
            className="text-center drop-shadow-2xl"
          />
        </Link>

        <div className="bg-green-500 rounded-lg w-2/3 md:w-1/3 mx-auto overflow-y-auto mb-4">
          <h1 className="w-full font-sans text-5xl text-yellow-400 flex justify-center">
            News
          </h1>
          <div className="p-2">
            {postsList.map((post) => (
              <div
                key={post.node.id}
                className="my-4 underline hover:text-white"
              >
                <Link href={`/news/${post.node._sys.filename}`}>
                  {post.node.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection({
    first: 5,
  });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
