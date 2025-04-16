import useSpendingStore from '../utils/stores/useSpendingStore';

export default function SpendingTransactions() {
  const transactions = useSpendingStore((state) => state.transactions);

  return (
    <div className="p-4">
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li key={t.id} className="border p-3 rounded-md shadow-sm">
            <p><strong>{t.name}</strong></p>
            <p>Category: {t.category}</p>
            <p>Amount: ${t.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
