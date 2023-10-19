import css from './TransactionHistory.module.css'

export const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr className={css.transactionHistoryItem}>
    <td>{type}</td>
    <td className={css.amount}>{amount}</td>
    <td className={css.currency}>{currency}</td>
  </tr>
);
