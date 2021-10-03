import UserCard from "./User";
export default function UserList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <UserCard
            avatar={item.avatar}
            username={item.name}
            tag={item.tag}
            location={item.location}
            followers={item.stats.followers}
            views={item.stats.views}
            likes={item.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}
