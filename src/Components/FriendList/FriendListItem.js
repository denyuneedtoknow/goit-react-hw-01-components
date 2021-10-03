import PropTypes from "prop-types";
import s from "./FriendList.module.css";
console.log(s);
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.status} className={s.onLine}>
          OnLine
        </span>
      ) : (
        <span className={s.status} className={s.offLine}>
          OffLine
        </span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
