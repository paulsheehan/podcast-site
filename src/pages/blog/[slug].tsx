import { useRouter } from 'next/router'
import { getPosts, getSinglePost, PostType } from '@/app/lib/post';

interface Props {
  post?: PostType;
}
export default function BlogSingle() {
  const router = useRouter()
  return (
    <div>
      <h1>Blog Post</h1>
      <div />
    </div>
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