import express from "express";
import supertest from "supertest";

interface Book {}

// set up the web app
const app = express();

// follow this pattern for other routes (function name on the app corresponds to a http method)
app.get("/book", (req: express.Request, res: express.Response) => {
  throw Error("Not implemented");
});

// tests
test("throws an error", async () => {
  const result = await supertest(app).get("/book");
  expect(result.statusCode).toBe(500);
});
