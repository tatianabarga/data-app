import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import useSpendingStore from '../utils/stores/useSpendingStore';

const colors = ['#253130', '#475D5A', '#5C7371', '#819B98'];

export default function SpendingChart() {
  const transactions = useSpendingStore((state) => state.transactions);
  // const filterByCategory = useSpendingStore((state) => state.filterByCategory);

  const data = [
    {
      name: 'Food',
      value: transactions
        .filter((e) => e.category === 'Food')
        .reduce((total, transaction) => total + transaction.amount, 0),
    },
    {
      name: 'Health',
      value: transactions
        .filter((e) => e.category === 'Health')
        .reduce((total, transaction) => total + transaction.amount, 0),
    },
    {
      name: 'Utilities',
      value: transactions
        .filter((e) => e.category === 'Utilities')
        .reduce((total, transaction) => total + transaction.amount, 0),
    },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={150}
        fill="#A7BCBA"
        label
      >
        {data.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Cell key={index} fill={colors[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
