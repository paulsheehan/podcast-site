import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import { montserratAlternates } from '../app/utils/fonts';

import { Button } from '../app/components/Button/Button';
import Hero from '../app/components/Hero/Hero';
import Heading from '../app/components/Heading/Heading';
import BlockContainer from '@/app/components/BlockContainer/BlockContainer';
import Image from 'next/image';

const heroContent = (
  <>
    <h1>
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

const testimonialBG = (
  <Image
    src="/sparkle.svg"
    alt="Background sparkle image"
    width={105}
    height={105}
  />
)

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Hero>
        {heroContent}
      </Hero>
      <section>
        <Heading 
          title="What our listeners say" 
          paragraph="Their experience throughout every platform"
          image={testimonialBG}
        />
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <main className={montserratAlternates.className}>{page}</main>;
};

export default Page;
