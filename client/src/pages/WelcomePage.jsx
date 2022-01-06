import React from 'react';

import Layout from '../components/layout';
import { CreatePost } from '../components/post';
import Posts from '../components/posts';

export const WelcomePage = () => {
  return (
    <Layout>
      <CreatePost />
      <Posts />
    </Layout>
  );
};
