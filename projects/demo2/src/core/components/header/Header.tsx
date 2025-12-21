import type { ReactNode } from "react";
import "./header.css";

// type headerProps = {
//   readonly title: string,
//   readonly subTitle?: string
// }

interface Props {
  readonly children?: ReactNode;
  readonly title: string;
  readonly subTitle?: string;
}

export const Header: React.FC<Props> = ({ children, title, subTitle = 'React ' }) => {

  return (
    <header>
      {children}
      <h1>{title}</h1>
      <h2 className="subtitle">{subTitle}</h2>
    </header>
  )
}
