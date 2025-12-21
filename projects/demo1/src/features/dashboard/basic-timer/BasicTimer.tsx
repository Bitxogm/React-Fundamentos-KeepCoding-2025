import { useEffect, useState } from "react";
import { Card } from "@core/components/card/Card";

export const BasicTimer: React.FC = () => {
 
  const [timer, setTimer] = useState(0);

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setTimer(0);
  }

  useEffect(() => {
    // console.log('useEffect')
    const intervalId = setInterval(() => {
      setTimer((prevCount) => prevCount + 1);
    }, 1000);
    return (): void => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
  
  return (
    
    <Card title="BasicTimer">
      <p>{timer}</p>
      <button onClick={handleReset}>Reset</button>
    </Card>
  )
}
