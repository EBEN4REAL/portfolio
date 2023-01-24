import React from "react";
import { User } from "../Types";

interface UserProps {
  user: User;
}

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="card user-item"  >
      <div className="title">
        <h1>{user?.name}</h1>
      </div>
      <div className="content">
        <div>
          <strong data-testid="user-address">Address:</strong>
          {user?.address?.suite} {user?.address?.street}, {user?.address?.city}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
