import { useRouter } from 'next/router'
 
export default function BlogSingle() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}