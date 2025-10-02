import { Header } from "../../widgets/LayoutHeader/Header";
import { PostList } from "../../widgets/PostList/PostList";
import { Footer } from "../../widgets/LayoutFooter/Footer";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <PostList />
            <Footer />
        </>
    )
};