import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { FC } from "react";
import { PostsPage } from "../../../pages/PostsPage/PostsPage";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { UserLayout } from "../../../shared/layouts/UserLayout";
import { UserPostsPage } from "../../../pages/UserPostsPage/UserPostsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <PostsPage /> },
            { path: "posts", element: <PostsPage /> },
            {
                path: "users/:id",
                element: <UserLayout />,
                children: [
                    { path: "posts", element: <UserPostsPage /> },
                    { path: "albums", element: <div>User Albums</div> },
                    { path: "todos", element: <div>User Todos</div> },
                ]
            },
        ]
    }
]);

export const Router: FC = () => {
    return <RouterProvider router={router} />
};