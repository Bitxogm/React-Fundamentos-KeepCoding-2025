import { Greetings } from "./greetings/Greetings"
import { PanicButton } from "./panic-button/PanicButton";
// import { PanicButtonCopy } from "./panic-button/PanicButtonCopy";
import { Names } from "./names/Names";
import { Focus } from "./focus/Focus";

import "./HomePage.css";

export const HomePage: React.FC = () => {
  return (
    <section>

      <h2>Start</h2>

      <Greetings />
      <PanicButton />
      {/* <PanicButtonCopy /> */}
      <Names />
      <Focus />
    </section>
  )
}

export default HomePage;