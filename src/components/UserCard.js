import React from "react";
import { Segment } from "semantic-ui-react";

const UserCard = props => {
  const user = props.user;
  return (
    <div>
      <Segment raised className="segments">
        <div className="flex">
          <div className="avatar">
            <img src={user.avatar_url} className="image" />
            <div>{user.name}</div>
            <div>{user.location}</div>
          </div>
          <div>
            <div>
              <a href={user.html_url}>View GitHub</a>
            </div>
            {(user.blog) ? <a href={user.blog}>View Website</a> :null}
          </div>
        </div>
        <img src={`http://ghchart.rshah.org/${user.login}`} />
      </Segment>
    </div>
  );
};

export default UserCard;
