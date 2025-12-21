import { Card } from "@core/components/card/Card";
import type { MenuOption } from "@core/types/menu-option";
import { DashboardPage } from "@features/dashboard/DashboardPage";
import { FormPage } from "@features/forms/FormPage";
import { HomePage } from "@features/home/HomePage";

export type Route = {
  path: string;
  component: React.FC;
  label?: string;
};

const NotFoundPage: React.FC = () => <Card>404 Page Not Found</Card>;

export const routes: Route[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
    label: "Home"
  },
  {
    path: "/dashboard",
    component: DashboardPage,
    label: "Dashboard"
  },
  {
    path: "/forms",
    component: FormPage,
    label: "Forms"
  },
  {
    path: "*",
    component: NotFoundPage
  }
];

export const getOptions = ():MenuOption[] => {

  return routes.filter(route => 'label' in route).map(
    route => ({
      path: route.path as string,
      label: route.label as string,
    })
  );
}
