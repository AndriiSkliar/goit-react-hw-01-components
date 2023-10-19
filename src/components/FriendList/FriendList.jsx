import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css';

export const FriendList = (props) => (
  <ul className={css.friendList}>
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


