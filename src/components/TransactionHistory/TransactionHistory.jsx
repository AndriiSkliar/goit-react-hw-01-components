import { TransactionHistoryItem } from "./TransactionHistoryItem";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.transactionHistoryList}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ type, amount, currency, id }) => (
        <TransactionHistoryItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);
