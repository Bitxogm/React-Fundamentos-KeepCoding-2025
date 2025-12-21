import { useState } from "react";

import { DashboardPage } from "@features/dashboard/DashboardPage";
import { FormPage } from "@features/forms/FormPage";
import { HomePage } from "@features/home/HomePage";
import { Card } from "@core/components/card/Card";

const routesMap: Record<string, React.FC> = {
  "/": HomePage,
  "/home": HomePage,
  "/dashboard": DashboardPage,
  "/forms": FormPage,
  "*": () => <Card>404 Page Not Found</Card>
};

export const RouterCopy: React.FC = () => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const CurrentPage: React.FC = routesMap[currentPath] || routesMap["*"];
 
  return <CurrentPage  />;

}
