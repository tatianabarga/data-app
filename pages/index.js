// import BudgetChart from '../components/BudgetChart';
import dynamic from 'next/dynamic';
import BudgetForm from '../components/BudgetForm';

const BudgetChart = dynamic(() => import('../components/BudgetChart'), {
  ssr: false,
});

function Home() {
  return (
    <div className="App">
      <div>
        <h1>Budget Practice</h1>
        <BudgetChart />
        <BudgetForm />
      </div>
      <div>
        <h2>see your spending details</h2>
      </div>
    </div>
  );
}

export default Home;
