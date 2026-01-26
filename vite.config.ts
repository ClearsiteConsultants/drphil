import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import dotenv from "dotenv";
import fs from "fs";

// Load .env.local file
if (fs.existsSync(".env.local")) {
  const envConfig = dotenv.parse(fs.readFileSync(".env.local"));
  Object.assign(process.env, envConfig);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  });
});
