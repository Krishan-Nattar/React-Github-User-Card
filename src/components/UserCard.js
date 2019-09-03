import React from "react";

const UserCard = props => {
  // console.log(props.data)
  const user = props.data;
  console.log(user);
  return (
    <div>
        
      <div>{user.name}</div>
      <div>{user.bio}</div>
      <div>{user.location}</div>
    </div>
  );
};

export default UserCard;
