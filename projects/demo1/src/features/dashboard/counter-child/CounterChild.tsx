import { useState, type MouseEventHandler } from "react";
import './counter.css';
import { Card } from "@core/components/card/Card";

type Props = {
  onTotal: (count: number) => void;
  onClick?: () => void;
}

export const CounterChild: React.FC<Props> = ({ onTotal, onClick }) => {
  const [count, setCount] = useState<number>(0);

  const handleAdd: MouseEventHandler<HTMLButtonElement> = (): void => {
    const newCount = count + 1;
    setCount(newCount);
    onTotal(newCount);
    onClick?.();
  };

  const handleSubstract: MouseEventHandler<HTMLButtonElement> = (): void => {
    const newCount = count - 1;
    setCount(newCount);
    onTotal(newCount);
    onClick?.();
  };

  const handleReset: MouseEventHandler<HTMLButtonElement> = (): void => {
    setCount(0);
    onTotal(0);
  };

  return (
    <Card title="Counter Child">
      <div className="counter">{count}</div>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </Card>
  )
}