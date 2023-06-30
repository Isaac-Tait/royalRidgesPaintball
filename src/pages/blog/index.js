import Link from 'next/link';
import { useTina } from 'tinacms/dist/react';
import { client } from '../../../tina/__generated__/client';

import Head from 'next/head';

import Layout from '../../app/layout';
import Footer from '../../components/Footer';

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
      <div className='flex flex-col min-h-screen bg-[url("https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] w-full bg-cover bg-center items-center justify-center'>
        <Head>
          <title>Rules @ Royal Ridges Paintball</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Link
          href='/'
          className='text-2xl lg:text-6xl absolute top-0 text-center font-extrabold text-yellow-400 font-sans bg-green-500 w-full py-4'
        >
          Royal Ridges Paintball
        </Link>

        <div className=''>
        <h1 className='font-serif text-5xl text-yellow-400'>Blog Posts</h1>
            {postsList.map((post) => (
              <div key={post.node.id}>
                <Link href={`/blog/${post.node._sys.filename}`}>
                  {post.node._sys.filename}
                </Link>
              </div>
            ))}
        </div>
        <div className='fixed inset-x-0 bottom-0'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } =
    await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
