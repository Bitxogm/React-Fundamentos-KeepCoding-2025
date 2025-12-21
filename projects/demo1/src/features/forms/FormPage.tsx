import { Login } from "./login/Login"
import { RegisterForm } from "./register/Register"
import { Search } from "./search/Search"


export const FormPage: React.FC = () => {


  return (
    <section>
      <h2>Form Page</h2>

      <Search />
      <Login />
      <RegisterForm />

    </section>
  )
}
