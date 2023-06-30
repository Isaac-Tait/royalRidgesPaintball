import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from '../../../tina/__generated__/client';

import Layout from '../../app/layout';

import Link from 'next/link';
import Head from 'next/head';

import Header from '../../components/Header';

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <div className='heropattern-bubbles-green-500'>
        <Header />
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1 className='text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-sans'>
            {data.post.title}
          </h1>
          <ContentSection content={data.post.body}></ContentSection>
        </div>
        <div className='bg-green-100 text-center'>
          Royal Ridges&apos; Paintball has been around since 2010 -
          <Link href='/about' className='text-yellow-500 underline'>
            {' '}
            learn more at our About page
          </Link>{' '}
          and see you on the field!
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.md` };
  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  };
};

export default BlogPage;

const PageSection = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  );
};

const components = {
  PageSection: PageSection,
};

const ContentSection = ({ content }) => {
  return (
    <div className='relative py-16 bg-white overflow-hidden'>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <TinaMarkdown components={components} content={content} />
        </div>
      </div>
    </div>
  );
};
