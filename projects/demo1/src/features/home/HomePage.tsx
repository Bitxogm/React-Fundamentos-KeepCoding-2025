import { Counter } from "./counter/Counter"
import { Greetings } from "./greetings/Greetings"
import { PanicButton } from "./panic-button/PanicButton";
import { PanicButtonCopy } from "./panic-button/PanicButtonCopy";

import "./HomePage.css";

export const HomePage: React.FC = () => {
  return (
    <section>

      <h2>Start</h2>

      <Counter />
      <Greetings />
      <PanicButton />
      <PanicButtonCopy />
      
    </section>
  )
}
