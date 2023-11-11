import Link from 'next/link';
import type { NextPageWithLayout } from './_app';

import { montserratAlternates } from '@/app/utils/fonts';

import TestimonialSection from '@/sections/TestimonialSection';

import { Button } from '@/app/components/Button/Button';
import Hero from '@/app/components/Hero/Hero';
import BlockContainer from '@/app/components/BlockContainer/BlockContainer';
import Carousel from '@/app/components/Carousel/Carousel';
import EpisodeCard from '@/app/components/EpisodeCard/EpisodeCard';

import { getPosts, PostType } from '@/app/lib/post';
import { ReactElement } from 'react';

interface Props {
  posts?: PostType[];
}


export async function getStaticProps() {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}

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

const Page: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Hero>{heroContent}</Hero>
      <Carousel>
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1230' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1231' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1232' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1233' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1234' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1235' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1236' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1237' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1238' />
        <EpisodeCard title="Perplexed Mind" imgSrc="/pod-episode-mind.png" link='/blog/1239' />
      </Carousel>
      <ul>
      {props.posts?.map((post: PostType) => (
        <li key={post.id}><Link href={`/blog/${post.slug}`}>{post.title}</Link></li>
      ))}
  </ul>
      <TestimonialSection />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <main className={montserratAlternates.className}>{page}</main>;
};

export default Page;
