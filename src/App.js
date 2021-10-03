import Statistics from "./Components/Statistics/Statistics";
import user from "./Components/Profile/user.json";
import UserList from "./Components/Profile/Profile";
import stats from "./Components/Statistics/statistical-data.json";
import friends from "./Components/FriendList/friends.json";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./Components/TransactionHistory/transactions.json";

const title = "Upload stats";
// const title = null;

export default function App() {
  return (
    <div>
      <UserList items={user} />
      <Statistics data={stats} title={title} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
