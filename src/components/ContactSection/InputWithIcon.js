import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const InputWithIcon = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uf0dao9",
        "template_nlljmee",
        form.current,
        "EYzqc9Ig48Qet4LTh"
      )
      .then(
        (result) => {
          alert("Enviado com sucesso.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          alert("Algo deu errado. Tente novamente mais tarde.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type="phone" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default InputWithIcon;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";
// import { FaUser, FaPhone, FaEnvelope, FaComment } from "react-icons/fa";

// export default function InputWithIcon() {
//   return (
//     <div className="formWithIcons">
//       <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}>
//         <FaUser className="FaIcon" />
//         <TextField
//           id="input-with-sx"
//           label="Nome"
//           color="success"
//           variant="standard"
//           sx={{ width: "100%" }}
//         />
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "flex-end",
//           marginBottom: "3%",
//           maxWidth: "100%",
//         }}
//       >
//         <FaPhone className="FaIcon" />
//         <TextField
//           id="input-with-sx"
//           label="Telefone"
//           color="success"
//           variant="standard"
//           sx={{ width: "100%" }}
//         />
//       </Box>
//       <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}>
//         <FaEnvelope className="FaIcon" />
//         <TextField
//           id="input-with-sx"
//           label="Email"
//           color="success"
//           variant="standard"
//           sx={{ width: "100%" }}
//         />
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "flex-end",
//           marginBottom: "3%",
//         }}
//       >
//         <FaComment className="FaIcon" />
//         <TextField
//           id="input-with-sx"
//           rows={2}
//           label="Mensagem"
//           color="success"
//           variant="standard"
//           sx={{ width: "100%" }}
//         />
//       </Box>
//       <div className="button-InputWithIcon">
//         <Button
//           style={{
//             marginTop: "3%",
//             backgroundColor: "rgba(0, 128, 0, 0.603)",
//             width: "100%",
//           }}
//           variant="contained"
//         >
//           Enviar
//         </Button>
//       </div>
//     </div>
//   );
// }
