const mastersCtrl = require("../controllers/masters.controller");
var express = require("express");
var bodyParser = require("body-parser");
var masters = express.Router();
masters.use(bodyParser.json());

/**
 * @swagger
 * /api/v1/masters/district:
 *   post:
 *     summary: Updates the specific data for district
 *     tags: [Masters District]
 *     responses:
 *       200:
 *         description: Updates the specific data for district
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     DsCode:
 *                       type: int
 *                       description: district code.
 *                       example: 004
 *                     DsName:
 *                       type: string
 *                       description: district name.
 *                       example: BELGAUM
 */

masters.route("/addCustomer").post(function (req, res, next) {
  mastersCtrl.add_customer(req, res, next);
});

masters.route("/updateCustomer").put(function (req, res, next) {
  mastersCtrl.update_customer(req, res, next);
});

masters.route("/deleteCustomer").delete(function (req, res, next) {
  mastersCtrl.delete_customer(req, res, next);
});


masters.route("/addJobDetails").post(function (req, res, next) {
  mastersCtrl.add_jobDetails(req, res, next);
});
masters.route("/updateJobDetails").put(function (req, res, next) {
  mastersCtrl.update_jobDetails(req, res, next);
});

masters.route("/deleteJobDetails").delete(function (req, res, next) {
  mastersCtrl.delete_jobDetails(req, res, next);
});

masters.route("/getJobDetails").post(function (req, res, next) {
  mastersCtrl.SearchJobDetails(req, res, next);
});
module.exports = masters;
