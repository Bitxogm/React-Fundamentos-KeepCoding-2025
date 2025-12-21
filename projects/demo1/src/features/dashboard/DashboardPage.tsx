import { Counter } from "@features/dashboard/counter/Counter";
import { CounterLogin } from "@features/dashboard/counter-login/CounterLogin";
import { CounterWrapper } from "./counter-wrapper/CounterWrapper";
import { BasicTimer } from "./basic-timer/BasicTimer";
import { FullTimer } from "./full-timer/FullTimer";

// import "./HomePage.css";

export const DashboardPage: React.FC = () => {
  return (
    <section>

      <Counter />
      <CounterLogin />
      <h2>🎲 Dashboard</h2>
      <CounterWrapper />
      <BasicTimer />
      <FullTimer />

    </section>
  )
}