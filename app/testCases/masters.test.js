const request = require("supertest");
const assert = require("chai").assert;

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = chai.expect;
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
app.use(bodyParser.urlencoded({ limit: "100mb" }));

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "100mb" }));
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

describe("/District", () => {
  it("return the success with 200 status code", (done) => {
    let payload = {
      DsCode: "004",
      DsName: "BELGAUM",
    };
    request(app)
      .post("/api/v1/masters/district")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("return update success with 200 status code", (done) => {
    let payload = {
      DsCode: "004",
      DsName: "BELGAUMOne",
    };
    request(app)
      .put("/api/v1/masters/district")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("return the lists, returns with 200 status code", (done) => {
    request(app)
      .get("/api/v1/masters/district")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("returns with 200 status code", (done) => {
    let payload = {
      DsCode: "004",
      DsName: "BELGAUMOne",
    };
    request(app)
      .delete("/api/v1/masters/district")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

describe("/Town", () => {
  it("return the success with 200 status code", (done) => {
    let payload = {
      TnCode: "111",
      TnName: "delhi",
      TnDsCode: "111",
    };
    request(app)
      .post("/api/v1/masters/town")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("return update success with 200 status code", (done) => {
    let payload = {
      TnCode: "111",
      TnName: "delhi",
      TnDsCode: "111",
    };
    request(app)
      .put("/api/v1/masters/town")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("return the lists, returns with 200 status code", (done) => {
    request(app)
      .get("/api/v1/masters/town/111")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("returns with 200 status code", (done) => {
    let payload = {
      TnCode: "111",
      TnName: "delhi",
      TnDsCode: "111",
    };
    request(app)
      .delete("/api/v1/masters/town")
      .send(payload)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
//town test ends 
describe("/Collage", () => {
    it("return the success with 200 status code", (done) => {
      let payload = {
        "CgCode": "111",
        "CgShName": "JNMCCE",
        "CgName": "jjcc Collage",
        "CgAddr1": " ",
        "CgAddr2" : "001",
        "CgAddr3" :"BELAGAVI",
        "CgLoca" : "",
        "CgPin" : "",
        "CgTnCode" : "001",
        "CgS1Cent" : "",
        "CgS2Cent" : "",
        "CgS1Capa" : "",
        "CgS2Capa" : "",
        "CgOnlyCent" : "",
        "CgType" : "",
        "CgEmail": "",
        "CgWeb" : "",
        "CgPhone": "",
        "CgFax": ""
    }
      request(app)
        .post("/api/v1/masters/collage")
        .send(payload)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  
    it("return update success with 200 status code", (done) => {
        let payload = {
            "CgCode": "111",
            "CgShName": "JNMCCE",
            "CgName": "jjcc Collage",
            "CgAddr1": " ",
            "CgAddr2" : "001",
            "CgAddr3" :"BELAGAVI",
            "CgLoca" : "",
            "CgPin" : "",
            "CgTnCode" : "001",
            "CgS1Cent" : "",
            "CgS2Cent" : "",
            "CgS1Capa" : "",
            "CgS2Capa" : "",
            "CgOnlyCent" : "",
            "CgType" : "",
            "CgEmail": "",
            "CgWeb" : "",
            "CgPhone": "",
            "CgFax": ""
        }
      request(app)
        .put("/api/v1/masters/collage")
        .send(payload)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  
    it("return No Data, returns with 404 status code", (done) => {
     
      request(app)
        .get("/api/v1/masters/collage/001/J/ / / / / / ")
        .end((err, res) => {
            console.log(err)
          expect(res.status).to.equal(404);
          done();
        });
    });
  
    it("returns with 200 status code", (done) => {
        let payload = {
            "CgCode": "111",
            "CgShName": "JNMCCE",
            "CgName": "jjcc Collage",
            "CgAddr1": " ",
            "CgAddr2" : "001",
            "CgAddr3" :"BELAGAVI",
            "CgLoca" : "",
            "CgPin" : "",
            "CgTnCode" : "001",
            "CgS1Cent" : "",
            "CgS2Cent" : "",
            "CgS1Capa" : "",
            "CgS2Capa" : "",
            "CgOnlyCent" : "",
            "CgType" : "",
            "CgEmail": "",
            "CgWeb" : "",
            "CgPhone": "",
            "CgFax": ""
        }
      request(app)
        .delete("/api/v1/masters/collage")
        .send(payload)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
module.exports = app;
