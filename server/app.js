import express from "express";
import cors from "cors";
import menuRoutes from "./routes/menu.js";
import contactRoutes from "./routes/contact.js";

export function createApp({ preMiddleware } = {}) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  if (preMiddleware) {
    app.use(preMiddleware);
  }

  app.use("/api/menu", menuRoutes);
  app.use("/api/contact", contactRoutes);

  app.get("/api/health", (req, res) => res.json({ status: "ok" }));

  return app;
}

export default createApp();
