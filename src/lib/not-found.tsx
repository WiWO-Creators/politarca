import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="page-wrap flex min-h-[50vh] max-w-lg flex-col items-center justify-center py-24 text-center">
      <p className="rubric">404</p>
      <h1 className="mt-3 font-display text-3xl font-medium">Esta pieza no existe.</h1>
      <p className="dek mt-3">El archivo no contiene esa ruta.</p>
      <Link to="/" className="pill mt-8">
        Volver al inicio
      </Link>
    </main>
  );
}
