import Transaction from './Transaction';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHead}>
        <tr className={s.tableRow}>
          <th className={s.tableHeader}>Type</th>
          <th className={s.tableHeader}>Amount</th>
          <th className={s.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
