import { useEffect, useState } from "react";
import { fakeFetchUserList } from "./apis/UserApi";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState({ name: "", email: "" });

  const getUsers = () => {
    fakeFetchUserList().then((users) => setUserList(users));
  };

  const clearUsers = () => {
    setUserList([]);
    setSelectedUser({ name: "", email: "" });
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-1">
          <button onClick={getUsers} type="button" className="btn btn-primary">
            Refresh Users
          </button>
        </div>
        <div className="col-1">
          <button
            onClick={clearUsers}
            type="button"
            className="btn btn-secondary"
          >
            Clear Users
          </button>
        </div>
      </div>

      <UserList userList={userList} />
      <UserDetails user={selectedUser} />
    </div>
  );
}

export default App;
