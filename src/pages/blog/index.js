import Link from 'next/link';
import { useTina } from 'tinacms/dist/react';
import { client } from '../../../tina/__generated__/client';

import Head from 'next/head';

import Layout from '../../app/layout';

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
      <Layout>
        <div className='flex min-h-screen heropattern-bubbles-green-500 flex-col justify-center py-2'>
          <Head>
            <title>Rules @ Royal Ridges Paintball</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <h1 className='text-6xl absolute top-10 text-center font-extrabold text-yellow-400 font-sans bg-green-500 w-full py-4'>
            Royal Ridges Paintball Blog Posts
          </h1>
  
          <div className='bg-slate-300'>
            {postsList.map((post) => (
              <div key={post.node.id}>
                <Link href={`/blog/${post.node._sys.filename}`}>
                  {post.node._sys.filename}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
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
