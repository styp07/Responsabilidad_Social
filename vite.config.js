import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// solo si vas a usar GitHub Pages
export default defineConfig({
  base: "/Responsabilidad_Social/", // reemplaza con el nombre de tu repositorio
  plugins: [react()],
});
