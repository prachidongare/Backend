let seconds = (24 * 60) * 60;
module.exports = {
  serverPort: process.env.PORT || 1003,
  host: 'localhost',
  serverSqlPort: 1435,
  dataBaseName: "jobPortalDatabase",
  dataBaseUserName: "jobportal",
  dataBasePassword: "root",
  jwt: {
    TokenLife: seconds,
    secret: "Flixir-Jobportel",
  },
  SENDGRID_API_KEY:
    "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",
  senderMailID: "paul.pinto@flixirsolutions.com",
};
