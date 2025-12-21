import { Card } from "@core/components/card/Card"
import { useRef, useState } from "react"

export const Search: React.FC = () => {

  // Estado para almacenar el valor del input de búsqueda
  // Cada vez que el usuario escribe, se actualiza este estado
  const [searchValue, setSearchValue] = useState('');

  // Ref para acceder directamente al elemento input del DOM
  // Se usa para hacer focus() al hacer reset (sin pasar por estado)
  const searchRef = useRef<HTMLInputElement>(null);

  // Handler que se ejecuta cada vez que cambia el valor del input
  // Extrae el valor del evento y lo almacena en el estado
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value } = e.target;
    setSearchValue(value);
  }

  // Handler para limpiar la búsqueda
  // Resetea el estado a vacío y usa la ref para hacer focus en el input
  // El operador ?. evita errores si la ref no existe
  const handleReset = (): void => {
    setSearchValue('');
    searchRef.current?.focus();
  }

  return (

    <Card title="Search Form" >

      {/* Formulario controlado: el input siempre refleja el estado 'searchValue' */}
      <form onReset={handleReset}>
        <input type="text"
          placeholder="Search..."
          value={searchValue}/* El valor del input está vinculado al estado */
          onChange={handleSearchChange}  /* Se actualiza al escribir */
          ref={searchRef}  /* Referencia al elemento para hacer focus */
        />
        {/* Botón reset que dispara el evento onReset del formulario */}
        <button type="reset">Clear</button>
      </form>
      {/* Muestra el valor actual de búsqueda en tiempo real */}
      <p>Your search <output>{searchValue}</output></p>
    </Card>
  )
}
