import React from "react";

const UserCard = props => {

  const user = props.user;

  return (
    <div>
      <div>{user.login}</div>
      <img src={user.avatar_url} className="image"/>
      <div>{user.location}</div>
      <img src={`http://ghchart.rshah.org/${user.login}`} />
    </div>
  );
};

export default UserCard;
