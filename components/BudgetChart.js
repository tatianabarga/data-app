import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import useBudgetStore from '../utils/stores/useBudgetStore';

const colors = ['#00C49F', '#FF6B6B'];

export default function BudgetChart() {
  const entries = useBudgetStore((state) => state.entries);

  const data = [
    {
      name: 'Income',
      value: entries
        .filter((e) => e.type === 'income')
        .reduce((sum, e) => sum + e.amount, 0),
    },
    {
      name: 'Expense',
      value: entries
        .filter((e) => e.type === 'expense')
        .reduce((sum, e) => sum + e.amount, 0),
    },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={150}
        fill="#8884d8"
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
