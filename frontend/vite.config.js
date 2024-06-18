import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envComation from "vite-plugin-env-compatible";

export default defineConfig({
    envPrefix: "REACT_APP_",
    plugins: [react(), envComation()],
    server: {
        proxy: {
            '/api': {
                target: 'http://91.108.113.40/',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});