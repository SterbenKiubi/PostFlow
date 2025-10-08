import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { FC } from "react";
import { PostsPage } from "../../../pages/PostsPage/PostsPage";
import { MainLayout } from "../../../shared/layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {index: true, element: <PostsPage />},
            {path: "posts", element: <PostsPage />}
        ]
    }
]);

export const Router: FC = () => {
    return <RouterProvider router={router} />
}