import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user }) => {
  return (
    <div>
      <div className="row mt-3">
        <h2>Info</h2>
      </div>
      <div className="row">
        <div className="col-2">
          <label>
            <strong>Name</strong>
          </label>
        </div>
        <div className="col-2">
          <label>{user.name}</label>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <label>
            <strong>Email</strong>
          </label>
        </div>
        <div className="col-2">
          <label>{user.email}</label>
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetails;
