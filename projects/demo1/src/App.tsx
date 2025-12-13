//* Imports
import { Layout } from '@core/components/layout/Layout';

//* Styles
import './App.css';
import type { MenuOption } from '@core/types/menu-option';
import { HomePage } from '@features/home/HomePage';

//* App
export const App: React.FC = () => {

  const appTitle = "🤪 Demo1";
  const appSubTitle = " 🫵🏻 React & TS & Vite";

  const menuOptions: MenuOption[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/counters', label: 'Counters' },
    {path: '/forms', label: 'Forms'},
    {path: '/login', label: 'Login'},
    {path: '/users', label: 'Users'},
  ];

  return (
    <>
      <Layout
        appTitle={appTitle}
        subTitle={appSubTitle}
        menuOptions={menuOptions}
      >
        <HomePage />
       
      </Layout>
    </>

  )
}
export default App;
