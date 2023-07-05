import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import { montserratAlternates } from '../app/utils/fonts';

import { Button } from '../app/components/Button/Button';
import BlockContainer from '../app/components/BlockContainer/BlockContainer';
import Hero from '../app/components/Hero/Hero';

const pageContent = (
  <>
    <h1>
      About <span className="block red">Pod of Cast</span>
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
    </p>
    <BlockContainer>
      <Button primary={false}>
        <span>Become Sponsor</span>
      </Button>
      <Button>
        <span>Subscribe</span>
      </Button>
    </BlockContainer>
  </>
);

const About: NextPageWithLayout = () => {
  return <Hero>{pageContent}</Hero>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <main className={montserratAlternates.className}>{page}</main>;
};

export default About;
