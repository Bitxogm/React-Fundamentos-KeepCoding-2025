import { Card } from "@core/components/card/Card";
import { useId } from "react";
import "./register.css";

export type Register = {
    userName: string;
    email: string;
    password: string;
    isOkConditions: boolean;
    turn: string;
    course: string;
};

type UserIDs = {
    // Mapped type: toma todas las claves de 'Register' y las mapea a 'string'
    // Esto crea un tipo objeto donde cada propiedad de Register (userName, email, etc.) es de tipo string
    // Se usa para almacenar los IDs únicos generados con useId() para accesibilidad (labels)
    [K in keyof Register]: string;
};

const userDataInitial: Register = {
    userName: "",
    email: "",
    password: "",
    isOkConditions: false,
    turn: "",
    course: "",
};

export const RegisterForm: React.FC = () => {
    const registerIds: UserIDs = {
        userName: useId(),
        email: useId(),
        password: useId(),
        isOkConditions: useId(),
        turn: useId(),
        course: useId(),
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
        // Prevenimos el comportamiento por defecto del formulario, que recargaría la página
        ev.preventDefault();
        console.log(userDataInitial);
        
        // Obtenemos el elemento form del evento para trabajar con él
        const form = ev.currentTarget; // EventTarget & HTMLFormElement
        console.dir(form);

        // Creamos un objeto FormData para capturar todos los valores del formulario de manera nativa
        // FormData es útil para formularios no controlados, ya que extrae automáticamente los valores de los inputs
        const formData = new FormData(form);

        // Creamos un objeto vacío 'result' para almacenar los datos procesados
        // Usamos Record para tipar un objeto con claves string y valores string o boolean
        const result: Record<string, string | boolean > = {
            isOkConditions: false, // Inicializamos el checkbox en false por defecto
        };

        // Recorremos el FormData con un bucle for...of, que itera sobre [clave, valor]
        // FormData.entries() devuelve un iterador de pares [key, value]
        for (const [key, value] of formData) {
            // Simplificado: si es el checkbox 'isOkConditions', convierte "on" a true; de lo contrario, toma el valor como string
            // Esto asume que solo 'isOkConditions' es boolean; otros campos (text, email, etc.) son strings
            result[key] = key === 'isOkConditions' ? value === 'on' : (value as string);
        }
        console.log(result);
    };
    return (
        <Card title="Formulario de registro">
            <p>Ejemplo de 'Controlled Form'</p>
            <p>Rellena el formulario y envíalo para ver los datos en consola</p>
            <form onSubmit={handleSubmit}>
                <div className="group-control">
                    <input
                        type="text"
                        placeholder="Dime tu nombre"
                        required
                        name="userName"
                        id={registerIds.userName}
                        //defaultValue={userDataInitial.userName}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="email"
                        placeholder="Dime tu email"
                        required
                        name="email"
                        id={registerIds.email}
                        //defaultValue={userDataInitial.email}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="password"
                        placeholder="Dime tu password"
                        required
                        name="password"
                        id={registerIds.password}
                        //defaultValue={userDataInitial.password}
                    />
                </div>

                <div className="group-control-line">
                    <input
                        type="checkbox"
                        id={registerIds.isOkConditions}
                        name="isOkConditions"
                        //defaultChecked={userDataInitial.isOkConditions}
                    />
                    <label htmlFor={registerIds.isOkConditions}>
                        Acepto las condiciones...
                    </label>
                </div>

                <fieldset name="turn">
                    <legend>Selecciona un turno</legend>
                    <div className="group-control-line">
                        <label htmlFor={registerIds.turn + "-m"}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + "-m"}
                                value="M"
                            />
                            <span>Mañana</span>
                        </label>

                        <label htmlFor={registerIds.turn + "-t"}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + "-t"}
                                value="T"
                            />
                            <span>Tarde</span>
                        </label>
                        <label htmlFor={registerIds.turn + "-n"}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + "-n"}
                                value="N"
                            />
                            <span>Noche</span>
                        </label>
                    </div>
                </fieldset>
                <div className="group-control-line">
                    <label htmlFor={registerIds.course}>
                        <span>Elige un curso</span>
                        <select
                            name="course"
                            id={registerIds.course}
                            //defaultValue={userDataInitial.course}
                        >
                            <option value=""></option>
                            <option value="A">Angular</option>
                            <option value="R">React</option>
                            <option value="N">Node</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>
    );
};
