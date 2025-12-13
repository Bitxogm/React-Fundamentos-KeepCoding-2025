import type { ReactNode } from "react";

import { Header } from '@core/components/header/Header';
import { Logos } from '@core/components/logos/Logos';
import { Menu } from '@core/components/menu/Menu';
import { Footer } from '../footer/footer';

//*Types
import type { MenuOption } from '@core/types/menu-option';

type Props = {
  children: ReactNode;
  appTitle: string;
  subTitle: string;
  menuOptions: MenuOption[];
}

export const Layout: React.FC<Props> = ({
   children, 
   appTitle, 
   subTitle, 
   menuOptions,
  }) => {

  return (
    <>
      <Header title={appTitle} subTitle={subTitle} >
        <Menu options={menuOptions} />
        <Logos />
      </Header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
