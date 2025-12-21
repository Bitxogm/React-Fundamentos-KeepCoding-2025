import { Card } from "@core/components/card/Card";
import './panic-button.css'
import type {  MouseEventHandler } from "react";

export const PanicButton: React.FC = () => {

  const handleClickPanicButton: MouseEventHandler<HTMLButtonElement> = ( event )=> {
    console.log(`estos son los eventos`, event);
    console.log(`Target` , event.target)
    console.dir('currentTarget', event.currentTarget);
  };

  return (
    <Card title="PanicButton">
      <div className="panic-button">
        <button onClick={handleClickPanicButton} >
          ☠️ Emergency mode!!!
        </button>
          <h3 className="message"> 🤔 Are you sure??????</h3>

      </div>
    </Card>

  )
}
