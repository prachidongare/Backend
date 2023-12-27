const { map, log } = require("async");
const sequelize = require("../../config/sequilizeconfig");
// customer apis list starts//
exports. add_customer = async (req, res) => {
  try {
    let insert_customer = await sequelize.sequelize
      .query(
        "DECLARE @Message AS varchar(100); EXEC sp_AMDCustomer :csId, :firstName, :lastName, :email, :mobile, :Address, :City, :AMD,  @Message output; SELECT @Message AS message;",
        {
          replacements: {
            csId: 0,
            firstName: req.body.firstName,
            lastName: req.body.lastName,  
            email: req.body.email,
            mobile: req.body.mobile,
            Address: req.body.Address,
            City: req.body.City,
            AMD: "A",
          },
          raw: true,
        }
      )

      .then(function (result) {
        if (result) {
          if (result[0][0].message == "") {
            return res.status(200).send({
              status: true,
              message: "Submitted Successfully",
            });
          } else {
            return res.status(500).send({
              status: false,

              message: result[0][0].message,
            });
          }
        }
      })
      .catch((error) => {
        console.log("Error", error);
        return res.status(500).send({
          status: false,
          message: "Invalid Inputs",
        });
      });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: " Failed",
      error: error,
    });
  }
};

exports.update_customer = async (req, res) => {
  try {

    let update_customer = await sequelize.sequelize
      .query(
        "DECLARE @Message AS varchar(100); EXEC sp_AMDCustomer :csId, :firstName, :lastName, :email, :mobile, :Address, :City, :AMD,  @Message output; SELECT @Message AS message;",
        {
          replacements: {
            csId: req.body.csId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
            Address: req.body.Address,
            City: req.body.City,
            AMD: "M",
          },
          raw: true,
        }
      )

      .then(function (result) {
        if (result) {
          if (result[0][0].message == "") {
            return res.status(200).send({
              status: true,

              message: "Updated Successfully",
            });
          } else {
            return res.status(500).send({
              status: false,

              message: result[0][0].message,
            });
          }
        }
      })
      .catch((error) => {
        //console.log("Error", error);
        return res.status(500).send({
          status: false,
          message: "Invalid Inputs",
        });
      });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: " Failed",
      error: error,
    });
  }
};

exports.delete_customer = async (req, res) => {
  try {
    let delete_customer = await sequelize.sequelize
      .query(
        "DECLARE @Message AS varchar(100); EXEC sp_AMDCustomer :csId, :firstName, :lastName, :email, :mobile, :Address, :City, :AMD,  @Message output; SELECT @Message AS message;",
        
        {
          replacements: {
            csId: req.body.csId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
            Address: req.body.Address,
            City: req.body.City,
            AMD: "D",
          },
          raw: true,
        }
      )

      .then(function (result) {
        if (result) {
          if (result[0][0].message == "") {
            return res.status(200).send({
              status: true,

              message: "Deleted Successfully",
            });
          } else {
            return res.status(500).send({
              status: false,

              message: result[0][0].message,
            });
          }
        }
      })
      .catch((error) => {
        //console.log("Error", error);
        return res.status(500).send({
          status: false,
          message: "Invalid Inputs",
        });
      });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: " Failed",
      error: error,
    });
  }
};
// customer apis end//


//job details api start
exports. add_jobDetails = async (req, res) => {
  try {
    let insert_customer = await sequelize.sequelize
      .query(
        "DECLARE @Message AS varchar(100); EXEC sp_AMDJobDetails :jobId, :jobPosition, :salary, :location, :skill, :AMD,  @Message output; SELECT @Message AS message;",
        {
          replacements: {
            jobId:0,
            jobPosition: req.body.jobPosition,
            salary: req.body.salary,
            location: req.body.location,
            skill: req.body.skill,
            AMD: "A",
          },
          raw: true,
        }
      )

      .then(function (result) {
        if (result) {
          if (result[0][0].message == "") {
            return res.status(200).send({
              status: true,
              message: "Submitted Successfully",
            });
          } else {
            return res.status(500).send({
              status: false,
              message: result[0][0].message,
            });
          }
        }
      })
      .catch((error) => {
        console.log("Error", error);
        return res.status(500).send({
          status: false,
          message: "Invalid Inputs",
        });
      });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: " Failed",
      error: error,
    });
  }
};

exports.update_jobDetails = async (req, res) => {
  try {

    let update_jobDetails = await sequelize.sequelize
      .query(
        "DECLARE @Message AS varchar(100); EXEC sp_AMDJobDetails :jobId, :jobPosition, :salary, :location, :skill, :AMD,  @Message output; SELECT @Message AS message;",
        {
          replacements: {
            jobId:req.body.jobId,
            jobPosition: req.body.jobPosition,
            salary: req.body.salary,
            location: req.body.location,
            skill: req.body.skill,
            AMD: "M",
          },
          raw: true,
        }
      )

      .then(function (result) {
        if (result) {
          if (result[0][0].message == "") {
            return res.status(200).send({
              status: true,

              message: "Updated Successfully",
            });
          } else {
            return res.status(500).send({
              status: false,

              message: result[0][0].message,
            });
          }
        }
      })
      .catch((error) => {
        //console.log("Error", error);
        return res.status(500).send({
          status: false,
          message: "Invalid Inputs",
        });
      });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: " Failed",
      error: error,
    });
  }
};

exports.delete_jobDetails = async (req, res) => {
  try {
    let delete_jobDetails = await sequelize.sequelize
      .query(
        "DECLARE @Message AS varchar(100); EXEC sp_AMDJobDetails :jobId, :jobPosition, :salary, :location, :skill, :AMD,  @Message output; SELECT @Message AS message;",
        
        {
          replacements: {
            jobId:req.body.jobId,
            jobPosition: req.body.jobPosition,
            salary: req.body.salary,
            location: req.body.location,
            skill: req.body.skill,
            AMD: "D",
          },
          raw: true,
        }
      )

      .then(function (result) {
        if (result) {
          if (result[0][0].message == "") {
            return res.status(200).send({
              status: true,

              message: "Deleted Successfully",
            });
          } else {
            return res.status(500).send({
              status: false,

              message: result[0][0].message,
            });
          }
        }
      })
      .catch((error) => {
        //console.log("Error", error);
        return res.status(500).send({
          status: false,
          message: "Invalid Inputs",
        });
      });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: " Failed",
      error: error,
    });
  }
};

exports.SearchJobDetails = async (req, res) => {
  try {
    let result = await sequelize.sequelize.query(
      "EXEC sp_SearchJobDetails :jobId;",
      {
        replacements: {
          jobId: req.body.jobId ? req.body.jobId:0,
        },
        raw: true,
      }
    );
    if (result[0].length > 0) {
      return res.status(200).send({
        status: true,
        message: "fetched successfully",
        data: result,
      });
    } else if (result[0].length == 0) {
      return res.status(404).send({
        status: false,
        message: "No Data Found",
        data: [],
        count: [],
      });
    } else {
      return res.status(500).send({
        status: false,
        message: "Failed",
        data: [],
        count: 0,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//job details api end