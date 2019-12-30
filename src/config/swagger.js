module.exports = {
  swaggerDefinition: {
    info: {
      title: 'Api BFF Tinder Marvel', // Title (required)
      version: '1.0.0', // Version (required)
    },
    basePath: '/',
  },
  apis: ['./src/**/*.js'], // Path to the API docs
};
