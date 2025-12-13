import { useState, type MouseEventHandler } from "react";
import './counter.css';
import { Card } from "@core/components/card/Card";


export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleAdd: MouseEventHandler<HTMLButtonElement> = () => { setCount(count +1) };
  const handleSubstract: MouseEventHandler<HTMLButtonElement> = () =>  { setCount(count -1) };
  const handleReset: MouseEventHandler<HTMLButtonElement> = () => { setCount(0) };

  return (
    <Card title="Counter App">
      <div className="counter">{count}</div>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>

      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </Card>

  )
}
