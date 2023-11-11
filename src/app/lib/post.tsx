import { ghostApi } from './config';

export interface PostType {
    id: number;
    title: string
    slug: string
    custom_excerpt: string
    feature_image: string
    created_at: string
    tag: string
    html: any
}

export async function getPosts() {
    return await ghostApi.posts
    .browse({
        limit: "all"
    })
    .catch(err => {
        console.error(err);
    });
}

export async function getSinglePost(postSlug: PostType["slug"]) {
    return await ghostApi.posts
    .read({
        slug: postSlug
    })
    .catch(err => {
        console.error(err);
    });
}