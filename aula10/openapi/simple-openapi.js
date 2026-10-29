import express from 'express'
import swaggerUi from 'swagger-ui-express';
import fs from 'node:fs';

const PORT = process.env.PORT || 3000;
const OPENAPI_FILE = process.env.OPENAPI_FILE || './openapi.json';

const app = express();

// Swagger UI
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(loadOpenApi())
);

app.get("/tasks", (req, resp)=>{
    resp.json("TASKS")
})

app.listen(PORT, onServerStart);

// Iniciar servidor
function onServerStart() {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/docs`);
}

// Ler a especificação OpenAPI
function loadOpenApi() {
  const content = fs.readFileSync(OPENAPI_FILE, 'utf8');
  return JSON.parse(content);
}
