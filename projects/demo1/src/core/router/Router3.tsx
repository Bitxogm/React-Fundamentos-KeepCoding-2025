import { useEffect, useState } from "react";
import { routes, type Route } from "./Routes";



export const Router3: React.FC = () => {

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

  // Busca la ruta exacta primero
  const validRoute: Route | undefined = routes.find(route => route.path === currentPath);
  // Si no existe, busca la ruta 404 (*)
  const notFoundRoute: Route | undefined = routes.find(route => route.path === "*");
  
  // Obtiene el componente a renderizar
  const currentRoute = validRoute || notFoundRoute;
  
  if (!currentRoute) {
    return <div>Error: No route configuration found</div>;
  }

  const CurrentPage = currentRoute.component;
 
  return <CurrentPage />;

}
