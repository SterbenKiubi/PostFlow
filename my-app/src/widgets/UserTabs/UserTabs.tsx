import type { FC } from "react";
import type { User } from "../../shared/mocks/users";
import { mockUsers } from "../../shared/mocks/users";
import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";

export const UserTabs: FC = () => {
    const { id } = useParams<{ id: string }>();
    const user: User | undefined = mockUsers.find(
        (user) => user.id === Number(id),
    );

    return (
        <nav className={styles.navMenu}>
            <div className={styles.userName}>{user?.name}</div>
            <div className={styles.navigation}>
                <NavLink to={`/users/${user?.id}/posts`}>
                    Posts
                </NavLink>
                <NavLink to={`/users/${user?.id}/albums`}>
                    Albums
                </NavLink>
                <NavLink to={`/users/${user?.id}/todos`}>
                    Todos
                </NavLink>
            </div>
        </nav>
    )
};