'use client'

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <MdLightMode className="w-5 h-5" />
      ) : (
        <MdDarkMode className="w-5 h-5" />
      )}
    </button>
  );
} 