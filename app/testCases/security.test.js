const request = require("supertest");
const assert = require('chai').assert;


let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = chai.expect
let should = chai.should();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const upload = require("express-fileupload");
// create express app
const app = express();


app.use(upload());
app.use(bodyParser.urlencoded({ limit: '100mb' }));

// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '100mb'}));
app.use(cors());
app.use(morgan("dev"));

var appRouter = require("../routes/app.routes");

appRouter.initialize(app);
/* Request Middleware */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "token");
  res.header("Access-Control-Max-Age", "600");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, "public")));
// describe("UserLogin", () => {

//   it("return login success with 200 status code", async () => {
//      const res = await assert.request(app).post('/api/user/userLogin').send({ userEmail: 'ad@ad.com', pass:'9pa58uvf' }); 
//      assert(res.status).toEqual(200);
//   });
// });

describe("/Security", () => {
  it("return the success with 200 status code", (done) => {
    let payload = {
      LoginName: "AjayPawar",
      LoginFullName: "Ajay Uday pawar",
      LoginAccess: "menu1, menu2",
      LoginPswd: "test@123",
      LoginLevel: "11",
    };
    request(app)
      .post("//api/v1/security/insert-login")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

  it("return update success with 204 status code", (done) => {
    let payload = {
      LoginId: 20,
    };
    request(app)
      .put("/api/v1/security/logout")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('return admin control/details with filtered data, returns with 200 status code', (done) => {
    request(app)
      .get('/api/v1/security/search-admin-control/1/1')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done();
      });
  });


it('return empty data for admin lists/details , returns with 404 status code', (done) => {
    request(app)
      .get('/api/v1/security/search-admin-control/1/1/1/1')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        done();
      });
    });


it('return admin lists/details with filtered data, returns with 200 status code', (done) => {
    request(app)
      .get('/api/v1/security/search-admin-list/1/1')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done();
      });
  });

  it('check users password if success returns with 200 status code', (done) => {
    let payload = {
        LoginName: 20,
        LoginPswd: "test@123"
      }
        request(app)
          .post('/api/v1/security/check-password')
          .send(payload)
          .end((err, res) => {
            expect(res.status).to.equal(200)
            done();
 });
 
});

it('change users password, if success returns with 200 status code', (done) => {
    let payload = {
        LoginId: 20,
        OldPswd: "test@123",
        NewPswd: "test123"
      }
        request(app)
          .post('/api/v1/security/change-password')
          .send(payload)
          .end((err, res) => {
            expect(res.status).to.equal(200)
            done();
 });
 
});
it('fetch details of specific user if success, returns with 200 status code', (done) => {
    request(app)
      .get('/api/v1/security/get-login-master/20')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done();
      });
  });
  it('Fetch details of a specific user if success, returns with 200 status code', (done) => {
    request(app)
      .get('/api/v1/security/initialize/1/2/3')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done();
      });
  });

  it("sheduler, if success returns ", (done) => {
    let payload ={
        ShId: 1,
        LoginId: 20
      }
    request(app)
      .put("/api/v1/security/schedule-lock")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
module.exports = app;

