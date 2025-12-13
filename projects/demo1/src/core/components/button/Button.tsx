import type { MouseEventHandler } from "react";

import './button.css';

type Props = {
  children: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  [key: string]: unknown;
}

export const Button: React.FC<Props> = ({ children, className, onClick, ...restOfProps }) => {

  const totalClass = className ? 'button ' + className : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number): void => {
    console.log('click en el componenete button', id)
    onClick(event);
  };

  return (
    <button className={totalClass} onClick={(event) => handleClick(event, 1)} {...restOfProps}>
      {children}
    </button>
  )
}
