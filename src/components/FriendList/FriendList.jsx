import { FriendListItem } from "./FriendListItem";

export const FriendList = (props) => (
  <ul className="friend-list">
    {props.friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);


