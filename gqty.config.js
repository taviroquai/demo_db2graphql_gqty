const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:4000/graphql",
    headers: {},
  },
  destination: "./gqty/index.js",
  subscriptions: false,
  javascriptOutput: true,
};

module.exports = config;