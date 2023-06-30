import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from '../../../tina/__generated__/client';

import Link from 'next/link';

import Layout from '../../app/layout';

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Layout>
        <div className='heropattern-bubbles-green-500'>
        <div>
          <h1 className='font-semibold text-xl md:text-5xl text-center font-sans text-yellow-400 md:pb-4 tracking-wider ml-2 bg-green-500 rounded-xl'>Royal Ridges Paintball</h1>
        </div>
          <div>
            <h1 className='text-3xl m-8 text-center leading-8 font-extrabold tracking-tight sm:text-4xl font-sans bg-green-500 text-yellow-400 rounded-xl max-w-xl mx-auto'>
              {data.post.title}
            </h1>
            <div className='max-w-5xl mx-auto'>
              <ContentSection
                content={data.post.body}
              ></ContentSection>
            </div>
          </div>
        </div>
      </Layout>
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
