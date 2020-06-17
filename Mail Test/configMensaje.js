const nodemailer = require("nodemailer");

module.exports = (form) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "smittyWJJno1@gmail.com",
      pass: "SmittySmitty1",
    },
  });

  const mailOptions = {
    from: "Smart Brawl Admin 👻 <smittyWJJno1@gmail.com>",
    to: form.email,
    subject: form.reason,
    html: `
 <strong>Dear:</strong> ${form.username} <br/>
 We recieved, your E-mail about ${form.reason}: <br/>
 <small> ${form.message} </small> <br/>
 Thank you so mucho for grading us with ${form.rate/10000}/10. <br/>
 We will improve our service to have the best customer service! <br/>
 `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
