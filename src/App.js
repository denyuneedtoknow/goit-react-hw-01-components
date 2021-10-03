import Statistics from "./Components/Statistics";
import user from "../src/user.json";
import UserList from "./Components/UserList";
import stats from "./statistical-data.json";
import friends from "./friends.json";
import FriendList from "./Components/FriendList";
import TransactionHistory from "./Components/TransactionHistory";
import transactions from "./transactions.json";

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
