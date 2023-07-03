import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from '../../../tina/__generated__/client';

import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../app/logoRRP.png';
import Footer from '../../components/Footer';
import Layout from '../../app/layout';

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <div className='heropattern-bubbles-green-500 bg-slate-700 flex flex-col'>
      <Link
          href='/'
          className='text-2xl lg:text-6xl font-extrabold text-yellow-400 font-sans bg-green-500 max-w-3xl mx-auto rounded-xl py-4'
        >
           <Image src={Logo} alt="This is the royal ridges logo" height={350} className='text-center'/>
        </Link>
        
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-3xl m-8 text-center leading-8 font-extrabold tracking-tight sm:text-4xl font-sans bg-green-500 text-yellow-400 rounded-xl'>
            {data.post.title}
          </h1>
          <div className=''>
            <ContentSection content={data.post.body}></ContentSection>
          </div>
        </div>
      </div>
      <div className='w-full sticky bottom-0'>
        <Footer />
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
    <div className='py-16 bg-green-500 rounded-xl mb-4 overflow-y-scroll'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='font-serif text-lg max-w-prose mx-auto'>
          <TinaMarkdown components={components} content={content} />
        </div>
      </div>
    </div>
  );
};
