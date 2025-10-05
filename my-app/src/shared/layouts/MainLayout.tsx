import { Header } from "../../widgets/LayoutHeader/Header";
import { PostList } from "../../widgets/PostList/PostList";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import { useEffect, useState } from "react";

export const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [isLoading]);

    return (
        <>
            <Header />
            <PostList isLoading={isLoading} />
            <Footer />
        </>
    )
};