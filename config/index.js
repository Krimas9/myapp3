module.exports = {
  port: process.env.PORT || 3000,
  //permet de me conneceter a la base de données:
  mongoUri: "mongodb://localhost:27017/myapp2",
  secretJwtToken: "test",
};
