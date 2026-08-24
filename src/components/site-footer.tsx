import { Link } from "@tanstack/react-router";
import { useTheme } from "./theme-provider";

export function SiteFooter() {
  const { theme } = useTheme();
  const logo = theme === "dark" ? "/brand/logo-light.png" : "/brand/logo-dark.png";

  return (
    <footer className="mt-8 border-t border-border bg-bg">
      <div className="page-wrap py-12 md:py-16">
        <img
          src={logo}
          alt="el politarca"
          className="masthead-logo masthead-logo--compact mb-12 md:mb-16"
        />

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="mb-4 font-ui text-[0.7rem] font-medium uppercase tracking-[0.14em] text-subtle">
              Secciones
            </p>
            <ul className="space-y-2 font-ui text-sm text-fg">
              <li>
                <Link to="/investigaciones" className="hover:opacity-70">
                  Investigaciones
                </Link>
              </li>
              <li>
                <Link to="/gobernanza" className="hover:opacity-70">
                  Gobernanza
                </Link>
              </li>
              <li>
                <Link to="/datos" className="hover:opacity-70">
                  Datos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:opacity-70">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-ui text-[0.7rem] font-medium uppercase tracking-[0.14em] text-subtle">
              Archivo
            </p>
            <ul className="space-y-2 font-ui text-sm text-fg">
              <li>
                <Link to="/investigaciones" className="hover:opacity-70">
                  El Lede
                </Link>
              </li>
              <li>
                <Link to="/gobernanza" className="hover:opacity-70">
                  Informe
                </Link>
              </li>
              <li>
                <Link to="/datos" className="hover:opacity-70">
                  Data Hub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-ui text-[0.7rem] font-medium uppercase tracking-[0.14em] text-subtle">
              Estándares
            </p>
            <ul className="space-y-2 font-ui text-sm text-fg">
              <li>
                <Link to="/nosotros" className="hover:opacity-70">
                  Manifiesto
                </Link>
              </li>
              <li>
                <Link to="/nosotros" hash="estandares" className="hover:opacity-70">
                  Metodología
                </Link>
              </li>
              <li>
                <Link to="/nosotros" hash="estandares" className="hover:opacity-70">
                  Correcciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-ui text-[0.7rem] font-medium uppercase tracking-[0.14em] text-subtle">
              Contacto
            </p>
            <ul className="space-y-2 font-ui text-sm text-fg">
              <li>
                <a href="mailto:consultas@politarca.com" className="hover:opacity-70">
                  consultas@politarca.com
                </a>
              </li>
              <li>
                <a href="mailto:institutional@politarca.com" className="hover:opacity-70">
                  Citas institucionales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="page-wrap flex flex-col gap-2 py-6 font-ui text-xs text-subtle sm:flex-row sm:justify-between">
          <span>© 2026 Politarca. Todos los derechos reservados.</span>
          <span>Santiago, Chile</span>
        </div>
      </div>
    </footer>
  );
}
