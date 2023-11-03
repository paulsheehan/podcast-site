import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';

import { montserratAlternates } from '@/app/utils/fonts';

import TestimonialSection from '@/sections/TestimonialSection';

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <TestimonialSection />
    </>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <main className={montserratAlternates.className}>{page}</main>;
};

export default Blog;
