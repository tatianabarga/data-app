import { useState } from 'react';
import { Button } from 'react-bootstrap';
import useSpendingStore from '../utils/stores/useSpendingStore';

export default function NewPurchaseForm() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const addTransaction = useSpendingStore((state) => state.addTransaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(category);
    addTransaction({
      id: Date.now(), name, category, amount: Number(amount),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" // issue here and probably not the only one
        placeholder="Name of Transaction"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        label="category"
        required
      >
        <option value="Food">Food</option>
        <option value="Health">Health</option>
        <option value="Utilities">Utilities</option>
      </select>
      <Button type="submit">Add</Button>
    </form>
  );
}
