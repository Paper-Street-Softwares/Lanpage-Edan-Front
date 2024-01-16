import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FaUser, FaPhone, FaEnvelope, FaComment } from "react-icons/fa";

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
          alert(
            "Mensagem enviada com sucesso. \nAcompanhe seu email pois em breve entraremos em contato."
          );
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
      <div className="formWithIcons">
        <Box
          sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}
        >
          <FaUser className="FaIcon" />
          <TextField
            name="user_name"
            id="input-with-sx"
            label="Nome"
            color="success"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "3%",
            maxWidth: "100%",
          }}
        >
          <FaPhone className="FaIcon" />
          <TextField
            name="user_phone"
            id="input-with-sx"
            label="Telefone"
            color="success"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}
        >
          <FaEnvelope className="FaIcon" />
          <TextField
            name="user_email"
            id="input-with-sx"
            label="Email"
            color="success"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "3%",
          }}
        >
          <FaComment className="FaIcon" />
          <TextField
            name="message"
            id="input-with-sx"
            rows={2}
            label="Mensagem"
            color="success"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Box>
        <div className="button-InputWithIcon">
          <Button
            type="submit"
            value="Send"
            style={{
              marginTop: "3%",
              backgroundColor: "rgba(0, 128, 0, 0.603)",
              width: "100%",
            }}
            variant="contained"
          >
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InputWithIcon;
