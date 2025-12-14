import { Card } from "@core/components/card/Card";
import { useState, type MouseEventHandler } from "react"

export const Names: React.FC = () => {

  const usersNames: string[] = ['Pepe', 'Luis', 'Juana'];

  const [names, setNames] = useState<string[]>([]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    setNames(usersNames);
  }

  const handleReset: MouseEventHandler<HTMLButtonElement> = (): void => {
    setNames([]);
  }

  return (

    <Card>
      {names.map((name, index) => <p style={{ display: 'inline-block', margin: '0.5em', color: 'blue', fontWeight: 'bold' }} key={index}>{name}</p>)}
      <button onClick={handleClick}>Load Names</button>
      <button onClick={handleReset}>Reset Names</button>
    </Card>

  )
}
