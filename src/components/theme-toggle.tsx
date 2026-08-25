import { Moon, Sun, BookOpen } from "lucide-react";
import { nextThemeLabel, useTheme } from "./theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, cycle } = useTheme();
  const Icon = theme === "dark" ? Moon : theme === "paper" ? BookOpen : Sun;
  return (
    <button
      type="button"
      onClick={cycle}
      className={`util-link inline-flex size-11 items-center justify-center ${className}`}
      aria-label={nextThemeLabel(theme)}
      title={nextThemeLabel(theme)}
    >
      <Icon className="size-4" strokeWidth={1.7} />
    </button>
  );
}
