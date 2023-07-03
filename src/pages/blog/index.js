import Link from 'next/link';
import { useTina } from 'tinacms/dist/react';
import { client } from '../../../tina/__generated__/client';

import Head from 'next/head';
import Image from 'next/image'

import Logo from '../../app/logoRRP.png';
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
      <div className='flex flex-col min-h-screen bg-green-500'>
        <Head>
          <title>Rules @ Royal Ridges Paintball</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Link
          href='/'
          className='text-2xl lg:text-6xl  font-extrabold text-yellow-400 font-sans max-w-3xl mx-auto rounded-xl py-4'
        >
          <Image src={Logo} alt="This is the royal ridges logo" height={350} className='text-center'/>
        </Link>

        <div className='bg-yellow-800 rounded-lg w-2/3 mx-auto'>
        <h1 className='w-full font-serif text-5xl text-yellow-400 flex justify-center'>Blog Posts</h1>
            <div>
            {postsList.map((post) => (
              <div key={post.node.id}>
                <Link href={`/blog/${post.node._sys.filename}`}>
                  {post.node._sys.filename}
                </Link>
              </div>
            ))}
            </div>
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
