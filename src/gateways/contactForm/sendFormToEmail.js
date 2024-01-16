const nodemailer = require("nodemailer");

const sendFormToEmail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "proj.se.recep10@gmail.com",
      pass: "aaskwozrbcisuirj",
    },
  });

  const mailOptions = {
    from: "proj.se.recep10@gmail.com",
    to: "edison.matos@live.com",
    subject: "Contato do Site - Edan Contabilidade ",
    text: "Texto preenchido pelo usuário",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      alert("Ocorreu um erro.");
      console.log("Ocorreu um error");
      return;
    } else {
      alert("Email enviado com sucesso.");
      console.log("Ocorreu um error");
      return;
    }
  });
};

module.exports = sendFormToEmail;
