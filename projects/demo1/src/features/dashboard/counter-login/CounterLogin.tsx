import { Card } from "@core/components/card/Card"
import { useState, type MouseEventHandler } from "react";

export const CounterLogin: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleAdd: MouseEventHandler<HTMLButtonElement> = (): void => {
    setCount((prev) => prev + 1);
  };

  const handleLogin: MouseEventHandler<HTMLButtonElement> = (): void => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Card title="Counter Login">
      { isLoggedIn && <button onClick={handleAdd}>count is {count}</button> }

      <button onClick={handleLogin}>
        { isLoggedIn ? 'Logout' : 'Login' }</button>
      <p>Login para ver counter</p>
    </Card>
  )
}
