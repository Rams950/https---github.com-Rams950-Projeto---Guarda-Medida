const request = require("supertest");
const server = require("../../server");
const Medida = require("../../models/medida");

beforeAll(async () => {
  await Medida.sync({ force: true }); // Sincronizar as tabelas antes dos testes
  await require("../../seeders/20240603105439-demo-medidas").up(); // Inserir dados de teste
});

afterAll(async () => {
  await server.close(); // Fechar o servidor após os testes
});

describe("Medida API", () => {
  it("deve criar uma nova medida", async () => {
    const res = await request(server)
      .post("/medidas")
      .send({ altura: 1.85, peso: 80 });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("altura", 1.85);
    expect(res.body).toHaveProperty("peso", 80);
  });

  it("deve listar todas as medidas", async () => {
    const res = await request(server).get("/medidas");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("deve obter uma medida específica", async () => {
    const medida = await Medida.create({ altura: 1.9, peso: 85 });

    const res = await request(server).get(`/medidas/${medida.id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("altura", 1.9);
    expect(res.body).toHaveProperty("peso", 85);
  });

  it("deve atualizar uma medida existente", async () => {
    const medida = await Medida.create({ altura: 1.75, peso: 70 });

    const res = await request(server)
      .put(`/medidas/${medida.id}`)
      .send({ altura: 1.8, peso: 75 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("altura", 1.8);
    expect(res.body).toHaveProperty("peso", 75);
  });

  it("deve excluir uma medida existente", async () => {
    const medida = await Medida.create({ altura: 1.75, peso: 70 });

    const res = await request(server).delete(`/medidas/${medida.id}`);

    expect(res.statusCode).toEqual(204);
  });
});
