import {  useId, useState } from "react";
import { Card } from "@core/components/card/Card"

interface Login {
  email: string;
  password: string;
  rememberMe?: boolean;
  course?: string;
};

const login: Login = {
  email: '',
  password: '',
  rememberMe: false,
  course: ''
}

export const Login: React.FC = () => {

  const [userData, setUserData] = useState<Login>(login);

  const emailId = useId();
  const passwordId = useId();
  const rememberMeId = useId();
  const courseId = useId();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    // console.log(event.currentTarget);
    console.log(userData)
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement > = (event): void => {
    const { name, value, type} = event.target;
    const checked = type === 'checkbox' ? event.target.checked : '' ;
    setUserData({
      ...userData, [name]: type === 'checkbox' ? checked : value
    });
  }

  return (
    <Card title="Login Form">

      <p>Formulario controlado básico con varios campos</p>

      <form onSubmit={handleSubmit}>

        <div className="group-control">
          <label htmlFor={emailId}>
            <span style={{ display: 'inline-block', width: '6rem' }}>
              Email:
            </span>
            <input
              type="email"
              name="email"
              id={emailId}
              placeholder="Dime tu email"
              aria-label="email"
              required
              value={userData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="group-control">
          <label htmlFor={passwordId}>
            <span style={{ display: 'inline-block', width: '6rem' }}>
              Password:
            </span>
            <input
              type="password"
              name="password"
              id={passwordId}
              placeholder="Dime tu password"
              aria-label="password"
              required
              min={5}
              value={userData.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <label htmlFor={rememberMeId}>
          <input
            type="checkbox"
            name="rememberMe"
            id={rememberMeId}
            aria-label="rememberMe"
            checked={userData.rememberMe}
            onChange={handleChange}
          />
          <span style={{ marginLeft: '0.5rem' }}>Recuerdame</span>
        </label>

        <div className="group-control-line">
          <label htmlFor={courseId}>
            <span>Elige un curso</span>
            <select
              name="course"
              id={courseId}
              value={userData.course || ''}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="A">Angular</option>
              <option value="R">React</option>
              <option value="N">Nodeº</option>
            </select>
          </label>

        </div>
        <div>
          <button type="submit">Enviar</button>

        </div>
      </form>
      <p>Ver el resultado en la consola del navegador</p>

    </Card>
  )
}
