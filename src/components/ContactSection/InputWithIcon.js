import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

export default function InputWithIcon() {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Nome" variant="standard" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "3%",
          maxWidth: "100%",
        }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Telefone" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "3%" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          multiline
          rows={2}
          label="Mensagem"
          variant="standard"
        />
      </Box>
      <Button
        style={{ marginTop: "3%", backgroundColor: "green" }}
        variant="contained"
      >
        Enviar
      </Button>
    </div>
  );
}
