import { useRef, useState, type MouseEventHandler } from "react";
import './counter.css';
import { Card } from "@core/components/card/Card";


export const Counter: React.FC = () => {

  let numRender = 0;
  const numberRenderRef = useRef(0);

  const [count, setCount] = useState<number>(0);

  const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
     numRender ++;
     numberRenderRef.current++;
     setCount(count + 1) };
  const handleSubstract: MouseEventHandler<HTMLButtonElement> = () => {
    numberRenderRef.current++; setCount(count - 1) };
  const handleReset: MouseEventHandler<HTMLButtonElement> = () => { setCount(0) };

  return (
    <Card title="Counter App">
      <div className="counter">{count}</div>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
      <p>Initial render {numRender}</p>
      <p>Numbers of renders {numberRenderRef.current}</p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </Card>

  )
}
