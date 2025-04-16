import dynamic from 'next/dynamic';
import useSpendingStore from '../utils/stores/useSpendingStore';
import SpendingTransactions from '../components/SpendingTransactions';
import NewPurchaseForm from '../components/NewPurchaseForm';

const SpendingChart = dynamic(() => import('../components/SpendingChart'), {
  ssr: false,
});

function SpendingPage() {
  const totalSpending = useSpendingStore((state) => state.findTotalSpent());

  return (
    <div>
      <h2>Spending page</h2>
      <SpendingChart />
      <div>
        <h3>total spending</h3>
        <p>{totalSpending}</p>
      </div>
      <div>
        <NewPurchaseForm />
      </div>
      <div>
        <h3>transactions</h3>
        <SpendingTransactions />
      </div>
    </div>
  );
}

export default SpendingPage;
