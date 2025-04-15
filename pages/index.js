// import BudgetChart from '../components/BudgetChart';
import dynamic from 'next/dynamic';
import BudgetForm from '../components/BudgetForm';

const BudgetChart = dynamic(() => import('../components/BudgetChart'), {
  ssr: false,
});

function Home() {
  return (
    <div className="App">
      <h1>Budget Practice</h1>
      <BudgetChart />
      <BudgetForm />
    </div>
  );
}

export default Home;
