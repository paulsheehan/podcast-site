import { useRouter } from 'next/router'
import { getPosts, getSinglePost, PostType } from '@/app/lib/post';

interface Props {
  post?: PostType;
}
export default function BlogSingle(props: Props) {
  const router = useRouter()
  return (
    <div>
      <h1>{props.post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post?.html }} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  // @ts-ignore
  const paths = posts.map((post: PostType) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context: { params: { slug: string; }; }) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}