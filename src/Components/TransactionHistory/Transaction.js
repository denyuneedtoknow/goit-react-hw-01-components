import PropTypes, { string } from 'prop-types';
import s from './TransactionHistory.module.css';
const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={s.tableRow}>
      <td className={s.tableData}>{type}</td>
      <td className={s.tableData}>{amount}</td>
      <td className={s.tableData}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Transaction;
