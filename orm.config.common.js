module.exports = {
  "type": "postgres",
  "entities": [
    process.env.TS_NODE_DEV === "true"
          ? "./src/models/*.ts"
          : process.env.TYPEORM_ENTITIES
    ],
  "migrations": [
    process.env.TS_NODE_DEV === "true"
          ? "./src/database/migrations/*.ts"
          : process.env.TYPEORM_MIGRATIONS],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "entitiesDir": "./src/models"
  }
};
