import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import { montserratAlternates } from '@/app/utils/fonts';

import TestimonialSection from '@/sections/TestimonialSection';

import { Button } from '@/app/components/Button/Button';
import Hero from '@/app/components/Hero/Hero';
import BlockContainer from '@/app/components/BlockContainer/BlockContainer';

const heroContent = (
  <>
    <h1
      onMouseUp={() => {
        console.log('mouseup');
      }}
    >
      Your Daily <span className="block red">Podcast</span>
    </h1>
    <p>
      We cover all kinds of categories and <span>a weekly special guest.</span>
    </p>
    <BlockContainer>
      <Button>
        <span>Subscribe</span>
      </Button>
    </BlockContainer>
  </>
);

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Hero>{heroContent}</Hero>
      <TestimonialSection />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <main className={montserratAlternates.className}>{page}</main>;
};

export default Page;
