import React from "react";
import ListProps from "../interfaces/ListProps";
import { ReactComponent as PanelLeftClose } from "../assets/panel-left-close.svg";

const List: React.FC<ListProps> = ({ userList, selectedUser, onUserClick }) => {
  return (
    <div data-testid="list-component">
      <div className="list-container" data-testid="user-item">
        {userList.map((user) => (
          <div
            key={user.id}
            className={`card ${selectedUser === user ? "active" : ""}`}
          >
            <div>
              <div className="user-name">{user.name}</div>
              <div className="dob-card">DOB: {user.dob}</div>
            </div>
            <div
              className={`signature-status ${
                user.signature ? "green" : "red"
              }`}
            >
              {user.signature
                ? "Has Custom Signature"
                : "Missing Custom Signature"}
            </div>
            <PanelLeftClose
              onClick={() => onUserClick(user)}
              className="panel-icon"
              style={{
                color: selectedUser === user ? "#1890ff" : "",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
