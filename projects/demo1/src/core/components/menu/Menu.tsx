//* Imports
import type { MenuOption } from "@core/types/menu-option";

//* Styles
import './menu.css'
import { Link } from "@core/router/link";

type Props = {
  options: MenuOption[];
}

export const Menu: React.FC<Props> = ({options}) => {

  return (
    <nav>
      <ul>
        {options.map((option) => (
          <li key={option.label}>
            <Link to={option.path}>{option.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
