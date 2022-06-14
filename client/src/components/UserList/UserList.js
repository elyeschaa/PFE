import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import "./UserList.css";

function UsersList({ userList }) {
  useEffect(() => {}, []);

  return (
    <div>
      <h2 className="usertitle">Users List</h2>

      <table className="tbadmin table table-bodered ">
        <thead>
          <tr>
            <th>Users ID</th>
            <th>Users Name</th>
            <th>Users E-mail</th>
            <th>Delete Users</th>
          </tr>
        </thead>

        <tbody>
          {userList.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{`${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`}</td>
                <td>{user.email}</td>

                <td className="delete">
                  <i
                    class="far fa-trash-alt "
                    onClick={() => {
                      // dispatch(deleteUser(user._id));
                    }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
