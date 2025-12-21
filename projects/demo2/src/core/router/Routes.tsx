import React from "react";

import { Card } from "@core/components/card/Card";
import type { MenuOption } from "@core/types/menu-option";
import { redirect, type RouteObject } from "react-router";
import App from "../../App";

export type Route = {
  path: string;
  component: React.FC;
  label?: string;
};

const NotFoundPage: React.FC = () => <Card>404 Page Not Found</Card>;
const HomePage = React.lazy(() => import('@features/home/HomePage'));
const DashboardPage = React.lazy(() => import('@features/dashboard/DashboardPage'));
const ProductsPage = React.lazy(() => import('@features/products/ProductsPage'));

const protectedRoute = (): void => {
    const token = localStorage.getItem('sparest-token')
    if (!token) {
        throw redirect("/");
    }
}

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      {
        // path: "/",
        index: true,
        Component: HomePage,
      },

      {
        path: "/home",
        loader: (): void => {
          throw redirect("/");
        },
        id: "Home",
      },
      {
        loader: protectedRoute,
        path: "/products",
        Component: ProductsPage,
        id: "Products"
      },
      {
        loader: protectedRoute,
        path: "/products/:id",
        Component: ProductsPage,
      },
      {
        path: "/dashboard",
        Component: DashboardPage,
        id: "Dashboard"
      },
      {
        path: "/forms",
        lazy: {
          Component: async () => (
            await import('@features/forms/FormPage')).FormPage
        },
        id: "Forms"
      },
      {
        path: "*",
        Component: NotFoundPage
      }


    ]
  }
];

export const getOptions = (): MenuOption[] => {

  return routes[0].children?.filter(route => 'id' in route).map(
    route => ({
      path: route.path as string,
      label: route.id as string,
    })
  ) ?? [];
}
