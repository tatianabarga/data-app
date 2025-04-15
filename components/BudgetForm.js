import { useState } from 'react';
import { Button } from 'react-bootstrap';
import useBudgetStore from '../utils/stores/useBudgetStore';

export default function BudgetForm() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const addEntry = useBudgetStore((state) => state.addEntry);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ id: Date.now(), type, amount: Number(amount) });
    // setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} label="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <Button type="submit">Add</Button>
    </form>
  );
}
