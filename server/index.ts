import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/get", (c) => {
  return c.json({ name: "hello world" });
});

export default app;
