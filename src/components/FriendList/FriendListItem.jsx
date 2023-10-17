export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <span className="status" data-online={isOnline}></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);
