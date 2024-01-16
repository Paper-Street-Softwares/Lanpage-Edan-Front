import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FaUser, FaPhone, FaEnvelope, FaComment } from "react-icons/fa";
import SendIcon from "@mui/icons-material/Send";

export default function InputWithIcon() {
  return (
    <div className="formWithIcons">
      <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}>
        <FaUser className="FaIcon" />
        <TextField
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
          id="input-with-sx"
          label="Telefone"
          color="success"
          variant="standard"
          sx={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}>
        <FaEnvelope className="FaIcon" />
        <TextField
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
          style={{
            marginTop: "3%",
            backgroundColor: "rgba(0, 128, 0, 0.603)",
            width: "100%",
          }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
}
