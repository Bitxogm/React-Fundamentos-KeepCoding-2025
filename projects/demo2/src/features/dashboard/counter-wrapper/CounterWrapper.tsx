import { Card } from "@core/components/card/Card"
import { useState } from "react"
import { CounterChild } from "../counter-child/CounterChild";

export const CounterWrapper: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const total = count1 + count2;

  const handleTotal1 = (newCount: number): void  => setCount1(newCount);
  const handleTotal2 = (newCount: number): void => setCount2(newCount);
  const handleClick = (): void => setTotalClicks(prev => prev + 1);

  return (
    <Card title="Counters">
      <h3>Total = {total}</h3>
      <h3>TotalClicks = {totalClicks}</h3>
      <CounterChild onTotal={handleTotal1} onClick={handleClick} />
      <CounterChild onTotal={handleTotal2} onClick={handleClick} />
    </Card>
  )
}