import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { medirVista } from "@/lib/analytics";

/**
 * Responsabilidad: mandar una vista de página a Google Analytics cada vez que
 * cambia la ruta.
 * Usado por: routes/__root.tsx, montado una sola vez para todo el sitio.
 * NO hace: no mide piezas —eso lo hace la ruta de la pieza— ni carga gtag, que
 *   viene del head.
 *
 * EXISTE PORQUE ESTE SITIO NO RECARGA NUNCA: se navega con Link, y el arranque
 * de Google cuenta una sola vista por visita. Quien entra por la portada y lee
 * cuatro piezas quedaría como una visita a la portada.
 */
export function MedicionDeVistas() {
  // Solo el camino: el estado del enrutador cambia por muchos motivos y con el
  // objeto entero se mandarían vistas repetidas de la misma página.
  const ruta = useRouterState({
    select: (estado) => estado.location.pathname,
  });

  useEffect(() => {
    // Un tick de espera: TanStack escribe el título al aplicar el head de la
    // ruta nueva, y leerlo antes rotula la vista con el de la página anterior.
    const reloj = setTimeout(() => {
      medirVista(ruta, document.title);
    }, 0);

    return () => clearTimeout(reloj);
  }, [ruta]);

  return null;
}
