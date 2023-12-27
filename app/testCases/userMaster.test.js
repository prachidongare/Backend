// const request = require("supertest");
// const assert = require('chai').assert;


// let chai = require('chai');
// let chaiHttp = require('chai-http');
// const expect = chai.expect
// let should = chai.should();

// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const morgan = require("morgan");
// const cors = require("cors");
// const upload = require("express-fileupload");
// // create express app
// const app = express();


// app.use(upload());
// app.use(bodyParser.urlencoded({ limit: '100mb' }));

// // parse requests of content-type - application/json
// app.use(bodyParser.json({limit: '100mb'}));
// app.use(cors());
// app.use(morgan("dev"));

// var appRouter = require("../routes/app.routes");

// appRouter.initialize(app);
// /* Request Middleware */
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Headers", "token");
//   res.header("Access-Control-Max-Age", "600");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });
// app.set("view engine", "jade");

// app.use(express.static(path.join(__dirname, "public")));
// // describe("UserLogin", () => {

// //   it("return login success with 200 status code", async () => {
// //      const res = await assert.request(app).post('/api/user/userLogin').send({ userEmail: 'ad@ad.com', pass:'9pa58uvf' }); 
// //      assert(res.status).toEqual(200);
// //   });
// // });

// describe('/UserLogin', () => {
  
//   it('return login success with 200 status code', (done) => {
//       let payload = { userEmail: 'ad@ad.com', pass:'9pa58uvf' }
//       request(app)
//         .post('/api/userlogin/auth')
//         .send(payload)
//         .end((err, res) => {
//           expect(res.status).to.equal(200)  
//           done();
//         });
//   });

//   it('return all users with status code 200', (done) => {
   
//     request(app)
//       .get('/api/user/getUserList')
//       .end((err, res) => {
//         expect(res.status).to.equal(200)  
//         done();
//       });
// });

// it('return single user by id with status code 200', (done) => {
//   request(app)
//     .get('/api/user/getUserList?userId=' + 1)
//     .end((err, res) => {
//       expect(res.status).to.equal(200)  
//       done();
//     });
// });

// });

// module.exports = app;




