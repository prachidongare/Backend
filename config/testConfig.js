let seconds = (24 * 60) * 60;
module.exports = {
  
   serverPort: process.env.PORT || 3000,
   serverHost: '192.168.1.7',
  
  dbUrl: "mongodb+srv://usera:y0hndrfCVwdwKldH@cluster0.poooh.mongodb.net/EPMS?",

  jwt: {
    TokenLife: seconds,
    secret: "Asset",
  },


};
