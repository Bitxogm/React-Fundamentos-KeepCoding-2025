//* Imports
import type { MenuOption } from "@core/types/menu-option";

//* Styles
import './menu.css'

type Props = {
  options: MenuOption[];
}

export const Menu: React.FC<Props> = ({options}) => {

  return (
    <nav>
      <ul>
        {options.map((option) => (
          <li key={option.label}>
            <a href={option.path}>{option.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
