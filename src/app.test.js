const request = require("supertest");
const app = require("./app");
describe("API", () => {
  test("GET /api/health", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
  test("POST /api/echo", async () => {
    const payload = { msg: "Hi Node" };
    const res = await request(app).post("/api/echo").send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ youSent: payload });
  });
});
