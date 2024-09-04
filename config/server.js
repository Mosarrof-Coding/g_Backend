module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});

// config/server.js
// const strapi = require("@strapi/strapi");
// const http = require("http");
// const socketSetup = require("./socket");

// async function startServer() {
//   try {
//     // @ts-ignore
//     const app = await strapi().start();
//     const server = http.createServer(app);
//     socketSetup(server);
//     server.listen(app.config.port, () => {
//       console.log(`Server is running on port ${app.config.port}`);
//     });
//   } catch (error) {
//     console.error("Error starting the server:", error);
//   }
// }
// startServer();

// module.exports = ({ env }) => ({
//   host: env("HOST", "0.0.0.0"),
//   port: env.int("PORT", 1337),
//   app: {
//     keys: env.array("APP_KEYS"),
//   },
//   webhooks: {
//     populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
//   },
// });
