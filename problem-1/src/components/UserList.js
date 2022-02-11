import React from "react";
import PropTypes from "prop-types";

const UserList = ({ userList }) => {
  return (
    <div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.email}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-success">Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
};

export default UserList;
