import { Card } from "@core/components/card/Card";
import { useRef, type MouseEventHandler } from "react";

export const Focus : React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus: MouseEventHandler<HTMLButtonElement> = ():void => {
    inputRef.current?.focus();
  }

  return (
    <Card title="Focus">
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </Card>
  )
}
