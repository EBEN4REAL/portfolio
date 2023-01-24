import React from "react";
import { User } from "../Types";
import UserCard from "./User";
import { Link } from "react-router-dom";

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const renderUsers = () => {
    return users.map((user) => {
      return (
        <Link to={{ pathname: `users/${user?.id}` }} key={user.id} className="user-item">
          <UserCard user={user}  />
        </Link>
      );
    });
  };

  return <div className="users-container">{renderUsers()}</div>;
};

export default Users;
