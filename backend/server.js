<<<<<<< HEAD
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Shift Planning Tool!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
=======
require("dotenv").config();
const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.DATABASE_ID;
const containerId = process.env.CONTAINER_ID;

const client = new CosmosClient({ endpoint, key });

async function testConnection() {
  try {
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    console.log(`Connected to Cosmos DB: ${database.id}`);
  } catch (error) {
    console.error("Cosmos DB Connection Error:", error);
  }
}

testConnection();
>>>>>>> 58e2324e (commit)
