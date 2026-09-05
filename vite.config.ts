import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  /*
   * En localhost seguimos trabajando desde "/".
   * Al construir para GitHub Pages, el sitio vive dentro de:
   * /CineClubAbarca/
   */
  base: command === "build" ? "/CineClubAbarca/" : "/",

  plugins: [react(), tailwindcss()],

  resolve: {
    dedupe: ["react", "react-dom"],
  },
}));