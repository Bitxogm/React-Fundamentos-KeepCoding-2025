import type { ReactNode } from 'react';
import './card.css';

type Props = {
  readonly children: ReactNode;
  readonly title?: string;
  readonly userName?: string
}

export const Card: React.FC<Props> = ({ children, title, userName }) => {

  return (
    <div className="card">
      {
        //  title ? <h3>{title}</h3> : 'Sin Titulo'
        //  title ? <h3>{title}</h3> : null
        //  title && <h3>{title}</h3> 
        //  userName && <h3>{userName}</h3>
      }
      {title}
      {userName}

      {children}
    </div>
  )
}
