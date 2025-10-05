import type { Post } from "../../../entities/post/ui/PostCard";

export const filterByLength = (posts: Post[], minLength: number): Post[] => {
    return posts.filter(post => post.title.length >= minLength);
};