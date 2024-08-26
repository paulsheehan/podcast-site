import { useRouter } from 'next/router'
import { getPosts, getSinglePost, PostType } from '@/app/lib/post';
import Hero from '@/app/components/Hero/Hero';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import BlockContainer from '@/app/components/BlockContainer/BlockContainer';

interface Props {
  post?: PostType;
}

const title = "Back to articles";
const linkTo = "/";

const heroContent = (
  <>
    <BlockContainer left spaceBetween>
      <div style={ {paddingTop: 80 }}>
        <BlockContainer flex spaceBetween>
          <Breadcrumbs title={title} linkTo={linkTo} />
          <span>Date</span>
        </BlockContainer>
      </div>
      <div>
        <span className="block red">Tips & Tricks</span>
      </div>
      <h1>
        Doodle artwork
      </h1>
    </BlockContainer>
  </>
);

export default function BlogSingle() {
  const router = useRouter();

  return (
    <>
      <Hero>
        {heroContent}
      </Hero>
    </>
  )
}

// export async function getStaticPaths() {
//   const posts = await getPosts()

//   // @ts-ignore
//   const paths = posts.map((post: PostType) => ({
//     params: { slug: post.slug },
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps(context: { params: { slug: string; }; }) {
//   const post = await getSinglePost(context.params.slug)

//   if (!post) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { post }
//   }
// }