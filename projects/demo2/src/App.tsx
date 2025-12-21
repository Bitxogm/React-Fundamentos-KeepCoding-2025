//* Imports
import { Layout } from '@core/components/layout/Layout';

import type { MenuOption } from '@core/types/menu-option';

//* Styles
import './App.css';
import { getOptions } from '@core/router/Routes';
import { Outlet } from 'react-router';
//* App

export const App: React.FC = () => {

  const appTitle = " 👎🏻 Demo2";
  const appSubTitle = " 🙃 Demo2 Application";

  const menuOptions: MenuOption[] = getOptions();
  menuOptions.push({ path: '/docs', label: 'Docs' });
  
  // [
  //   { path: '/', label: 'Home' },
  //   { path: '/dashboard', label: 'Dashboard' },
  //   { path: '/forms', label: 'Forms' },
  //   { path: '/about', label: 'About' },

  // ];

  return (
    <>
      <Layout
        appTitle={appTitle}
        subTitle={appSubTitle}
        menuOptions={menuOptions}
      >
        <Outlet />

      </Layout>
    </>

  )
}
export default App;
