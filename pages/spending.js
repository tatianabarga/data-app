import dynamic from 'next/dynamic';
import useSpendingStore from '../utils/stores/useSpendingStore';

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
    </div>
  );
}

export default SpendingPage;
