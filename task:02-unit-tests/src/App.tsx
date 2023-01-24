import React, { useEffect, useState } from "react";
import { getUsers } from "./Services/users";
import { User } from "./Types";
import { config } from "./config";
import "./app.css";
import Loader from "./Components/Loader"

/** Components */
import UsersList from "./Components/Users";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    getUsers(`${config.APP_BASE_URL}/users`).then((users) => {
      setUsers(users);
      setLoader(false);
    });
  }, []);


  return (
    <div className="container">
      <h3 className="text-center user-header">Users</h3>
      {!loader && <UsersList users={users} />}
      {loader && <Loader />}
      {loader}
    </div>
  );
};

export default App