import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  console.log(isOnline)
  return (
  <li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.isOnline : css.isOffline}`}></span>
    <img className={css.avatar} src={avatar} alt={name} />
    <p className={css.name}>{name}</p>
  </li>
)
};
