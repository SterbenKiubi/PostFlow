import type { FC } from "react";
import styles from "./withLoading.module.css";
import type { Post } from "../../../entities/post/ui/PostCard";

interface PostListProps {
    posts: Post[];
}

interface WithLoadingProps {
    isLoading: boolean;
};

export const withLoading = (
    WrappedComponent: FC<PostListProps>
): FC<PostListProps & WithLoadingProps> => {
    return function WithLoadingComponent({ isLoading, ...props }: PostListProps & WithLoadingProps) {
        if (isLoading) {
            return <div className={styles.loadingWrapper}>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };
};