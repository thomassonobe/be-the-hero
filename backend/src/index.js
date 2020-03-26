const express = require("express");
const cors = require("cors");
const routes = require("./routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP:

// GET: Buscar uma informação do back-end 
// POST: Criar uma informação no back-end 
// PUT: Alterar uma informação no back-end 
// Delete: Deletar uma informação do back-end 

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Pârametros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Paârametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NO SQL: MongoDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table("useres").select("*").where()
 */



app.listen(3333);
