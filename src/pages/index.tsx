import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import { montserratAlternates } from '../app/utils/fonts';

import { Button } from '../app/components/Button/Button';
import Hero from '../app/components/Hero/Hero';
import BlockContainer from '@/app/components/BlockContainer/BlockContainer';

const pageContent = (
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

const Page: NextPageWithLayout = () => {
  return <Hero>{pageContent}</Hero>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <main className={montserratAlternates.className}>{page}</main>;
};

export default Page;
