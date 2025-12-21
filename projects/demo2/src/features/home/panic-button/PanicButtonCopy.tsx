import { Card } from "@core/components/card/Card";
import type { MouseEventHandler } from "react";
import { Button } from "@core/components/button/Button";

export const PanicButtonCopy: React.FC = () => {

  const handleClickPanicButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(`estos son los eventos`, event);
    console.log(`Target`, event.target)
    console.log(event.currentTarget);
    // alert('No pudiste evitarlo !!');
  };

  return (
    <Card title="PanicButtonCopy">
      <div className="panic-button">
        <Button onClick={handleClickPanicButton} title="PanicButtonCopy">
          ☠️ Emergency mode!!!
        </Button>
        <h3 className="message"> 🤔 Are you sure??????</h3>

      </div>
    </Card>

  )
}


