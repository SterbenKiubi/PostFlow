import type { FC } from "react";
import styles from "./withLoading.module.css";

interface WithLoadingProps {
    isLoading: boolean;
};

export const withLoading = (
  WrappedComponent: FC
): FC<WithLoadingProps> => {

  return function WithLoadingComponent({ isLoading }) {

    if (isLoading) {
      return <div className={styles.loadingWrapper}>Loading...</div>;
    }

    return <WrappedComponent />;
  };
};