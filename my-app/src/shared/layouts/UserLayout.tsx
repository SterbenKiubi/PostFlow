import { Outlet } from "react-router-dom";
import type { FC } from "react";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";

export const UserLayout: FC = () => {
    return (
        <div>
            <UserTabs />
            <div>
                <Outlet />
            </div>
        </div>
    )
};