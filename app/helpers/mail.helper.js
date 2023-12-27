var nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const config = require("../../config/config.json");
const configjs = require("../../config/config.js");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(configjs.SENDGRID_API_KEY);

exports.sendMail = async (data, empId) => {
  var token = jwt.sign({ userId: empId, username: data.email }, config.secret, {
    expiresIn: config.tokenLife, // expires in 24 hours
  });
  try {
    const msg = {
      to: data.email,
      from: configjs.senderMailID,
      subject: "Account Verification",
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear " +
        data.firstName +
        " " +
        data.lastName +
        "" +
        '<div style="margin-top:20px;">' +
        "please <b>Verify email</b> to activate your account instantly. <br>" +
        "</div>" +
        '<div style="margin-top:10px;">' +
        '<a href="http://localhost:4200/auth/verifyuseremail?token=' +
        token +
        "&userId=" +
        empId +
        '" target="blank" style="background-color: #4CAF50; /* Green */' +
        "border: none;" +
        "color: white;" +
        "padding: 15px 32px;" +
        "text-align: center;" +
        "text-decoration: none;" +
        "display: inline-block;" +
        "font-size: 16px;" +
        "margin: 4px 2px;" +
        'cursor: pointer; background-color: #008CBA;">Verify Email now !</a>' +
        "</div>" +
        "<br>" +
        '<span style="color:gray">Note: This link will be functional for 72 hours and can only be used once</span> <br>' +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span>' +
        "<h3> <b> Audiology </b></h3>" +
        "</div>" +
        "</div>" +
        "</body>",
    };
    let sendmail = await sgMail.send(msg);
    return {
      status: true,
      message: "Registration mail send successfully",
      data: sendmail,
    };
  } catch (err) {
    //console.log(err);
  }
};
exports.sendConfirmationMail = async (data) => {
  // console.log("data, empId",data, empId);
  var token = jwt.sign({ userId: "123", username: data.fleetageEmailId }, config.secret, {
    expiresIn: config.tokenLife, // expires in 24 hours
  });
  try {
    const msg = {
      to: data.fleetageEmailId,
      from: configjs.senderMailID,
      subject: "Account Verification",
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear " +
        data.dealerName +
        " " +
        data.customerName +
        "" +
        '<div style="margin-top:20px;">' +
        "please <b>Verify email</b> to activate your account instantly. <br>" +
        "</div>" +
        '<div style="margin-top:10px;">' +
        '<a href="http://localhost:4200/auth/verifyuseremail?token=' +
        token +
        "&userId=" +
        empId +
        '" target="blank" style="background-color: #4CAF50; /* Green */' +
        "border: none;" +
        "color: white;" +
        "padding: 15px 32px;" +
        "text-align: center;" +
        "text-decoration: none;" +
        "display: inline-block;" +
        "font-size: 16px;" +
        "margin: 4px 2px;" +
        'cursor: pointer; background-color: #008CBA;">Verify Email now !</a>' +
        "</div>" +
        "<br>" +
        '<span style="color:gray">Note: This link will be functional for 72 hours and can only be used once</span> <br>' +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span>' +
        "<h3> <b> Audiology </b></h3>" +
        "</div>" +
        "</div>" +
        "</body>",
    };
    let sendmail = await sgMail.send(msg);
    return {
      status: true,
      message: "Registration mail send successfully",
      data: sendmail,
    };
  } catch (err) {
    //console.log(err);
  }
};
exports.sendOtpMail = async (data, otp) => {
  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "One Time Password", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Please use this code <b> " +
        otp +
        "</b> to verify your email and this email id will be used in all other primary transactions. <br>" +
        "</div>" +
        "<br>" +
        '<span style="color:gray">Note: This OTP is valid for 30min and can only be used once</span> <br>' +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<span style="font-size: 18px;">Audiology</span>' +
        "</div>" +
        "</div>" +
        "</body>",
    };
    let sendmail = await sgMail.send(msg);
    return {
      status: true,
      message: "Otp sent successfully",
      data: sendmail,
    };
  } catch (err) {
    //console.log(err);
  }
};

exports.sendTempPasscodeMail = async (data, tempPassword) => {

  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "Temporary password", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Please use this temporary password  <b> " +
        tempPassword +
        "</b> to login. <br>" +
        "</div>" +
        "<br>" +
        '<span style="color:gray">Note: This is temporary password. Please Change the password if needed </span> <br>' +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<div style="font-size: 18px;">M2M  </div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };


    let sendmail = await sgMail.send(msg);

    return {
      status: true,
      message: "temp password sent successfully",
      data: sendmail,

    };
  } catch (err) {
    //console.log(err);
  }
};

exports.sendGenomicsRequisition = async (data, file) => {
  // const fs = require("fs");
  // attachment = fs.readFileSync(file).toString("base64");
  // let attachment = file.file.data.toString("base64");
  // //console.log(data);
  try {
    const msg = {
      to: data.patientInformation.patientEmail,
      from: configjs.senderMailID,
      subject: "Genomics Requisition Form", // Subject line
      attachments: [
        {
          content: file,
          filename: data._id + "_report.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Submited Genomics Requisition Form  <b> " +
        "</div>" +
        "<br>" +
        '<span style="color:gray">Note: Please find the Attachment and Share it to your doctor </span> <br>' +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<div style="font-size: 18px;">Audiology </div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };
    let sendmail = await sgMail.send(msg);
    return {
      status: true,
      message: "Email sent",
      data: sendmail,
    };
  } catch (err) {
    //console.log(err);
  }
};

exports.conformationMail = async (data, tempPassword) => {
  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "Temporary password", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Your Password has changed  <b> " +
        "</div>" +
        "<br>" +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<div style="font-size: 18px;">Audiology</div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };
    let sendmail = await sgMail.send(msg);
    return {
      status: true,
      message: "temp password sent successfully",
      data: sendmail,
    };
  } catch (err) {
    //console.log(err);
  }
};

exports.sendOtpMailUser = async (data, otp) => {
  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "Household One Time Password", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Please use this code <b> " +
        otp +
        "</b> Share the OTP with your household member to allow to provide your records  <br>" +
        "</div>" +
        "<br>" +
        '<span style="color:gray">Note: When you allow u agree to share your presonal records </span> <br>' +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<span style="font-size: 18px;">Audiology</span>' +
        "</div>" +
        "</div>" +
        "</body>",
    };
    let sendmail = await sgMail.send(msg);
    return {
      status: true,
      message: "Otp sent successfully",
      data: sendmail,
    };
  } catch (err) {
    //console.log(err);
  }
};

exports.subscriptionExpiry = async (data, tempPassword, two) => {

  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "Subscription ending soon", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Your subscription for  <b> " +
        tempPassword +
        "</b> ending soon, Please renew before." +
        two +
        "<br>" +
        "</div>" +
        "<br>" +
        '<span style="color:gray">Note:Your subscription ending on   </span> <br>' + two +
        '<div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<div style="font-size: 18px;">M2M  </div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };


    let sendmail = await sgMail.send(msg);

    return {
      status: true,
      message: "temp password sent successfully",
      data: sendmail,

    };
  } catch (err) {
    //console.log(err);
  }
};
exports.thanksForRegistration = async (data, pass) => {

  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "Thanks for registering with us ", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Thanks for registering with us. Your Password is " + pass + "<br>" +
        "</div>" +
        "<br>" +
        '<span style="color:gray">   </span> <br><div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<div style="font-size: 18px;">UMS  </div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };


    let sendmail = await sgMail.send(msg);

    return {
      status: true,
      message: "temp password sent successfully",
      data: sendmail,

    };
  } catch (err) {
    //console.log(err);
  }
};
exports.emailOtp = async (data, pass) => {

  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "Thanks for registering with us ", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Your Email OTP is: " + pass + "<br>" +
        "</div>" +
        "<br>" +
        '<span style="color:gray">   </span> <br><div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<div style="font-size: 18px;">UMS  </div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };


    let sendmail = await sgMail.send(msg);

    return {
      status: true,
      message: "temp password sent successfully",
      data: sendmail,

    };
  } catch (err) {
    //console.log(err);
  }
};

exports.ScrutinyStudent = async (data) => {

  try {
    console.log('1',data)
    console.log(data.StuEmail)
    const msg = {
      to: data.StuEmail,
      from: configjs.senderMailID,
      subject: "Review Comments on Your Admission Form", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear "+ data.StuFirstName +"," +
        "" +
        '<div style="margin-top:20px;">' +
        "I hope this email finds you well. I am writing to inform you that we have completed the scrutiny process of the admission form you submitted to [College/University Name] for admission. During the review, we have identified certain comments, observations, and areas that require your attention. Please find the details below:<br> 1) [Observation/Comment 1]: " + data.Comment + " <br><br>" +
        "Please note that the sooner you can provide the necessary updates or clarification, the better it will be for your admission application. We want to ensure that your application is complete and accurate to facilitate a fair evaluation of your eligibility. <br><br>" +
        "Once you have made the required changes, please resubmit the revised admission form. <br><br>" +
        "Thank you for your attention to this matter, and we appreciate your cooperation. <br><br>" +
        "Best regards, <br><br>"+ 
        ""+ data.UserLoginName +" "+ data.CgName +"" +
        "</div>" +
        "<br><br>" +
        '<span style="color:gray">   </span> <br><div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br><br>' +
        '<div style="font-size: 18px;">UMS  </div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };

    console.log(msg)
    let sendmail = await sgMail.send(msg);

    return {
      status: true,
      message: "Mail Sent successfully",
      data: sendmail,

    };
  } catch (err) {
    //console.log(err);
  }
};

exports.ScrutinyOffice = async (data, resStatus) => {

  try {
    const msg = {
      to: data,
      from: configjs.senderMailID,
      subject: "Approval Status", // Subject line
      html:
        '<body style="background-color:#f4f2f2">' +
        '<div style="width:100%; background-color:white; padding-top: 10px; padding-left: 10px;">' +
        "Dear User" +
        "" +
        '<div style="margin-top:20px;">' +
        "Your have Recieved New Application Status Please Login in to your Account: " +
        "</div>" +
        "<br>" +
        '<span style="color:gray">   </span> <br><div style="margin-top:20px;">' +
        '<span style="font-size: 20px;">Regards</span><br>' +
        '<div style="font-size: 18px;">UMS  </div>' +
        "</div>" +
        "</div>" +
        "</body>",
    };


    let sendmail = await sgMail.send(msg);

    return {
      status: true,
      message: "temp password sent successfully",
      data: sendmail,

    };
  } catch (err) {
    //console.log(err);
  }
};