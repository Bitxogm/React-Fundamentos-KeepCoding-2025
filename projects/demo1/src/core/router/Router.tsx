import { useEffect, useState } from "react";

import { DashboardPage } from "@features/dashboard/DashboardPage";
import { FormPage } from "@features/forms/FormPage";
import { HomePage } from "@features/home/HomePage";
import { Card } from "@core/components/card/Card";


export const Router: React.FC = () => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = (): void => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate', handlePopState);

    return (): void => {
      window.removeEventListener('popstate', handlePopState);
    }
  }, [])

  let CurrentPage: React.FC = () => null;

  switch (currentPath) {
    case "/":
    case "/home":
      CurrentPage = HomePage;
      break;
    case "/dashboard":
      CurrentPage = DashboardPage;
      break
    case "/forms":
      CurrentPage = FormPage;
      break;
    default:
      return <Card>404 Page Not Found</Card>

  }
  return <CurrentPage  />;

}
