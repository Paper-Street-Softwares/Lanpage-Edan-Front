import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image1 from "../../style/assets/images/ex2.jpg";
import { GrTarget, GrMoney, GrOptimize } from "react-icons/gr";
import "../../style/css/componentsStyle/card.css";

export default function ActionAreaCard() {
  return (
    <div className="cardGroup">
      <Card sx={{ maxWidth: 345, marginRight: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <GrTarget className="icon-Choice" />
            <Typography variant="body2" color="text.secondary">
              Declaração de Imposto de Renda
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <GrMoney className="icon-Choice" />
            <Typography variant="body2" color="text.secondary">
              Declaração de Imposto de Renda
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <GrOptimize className="icon-Choice" />
            <Typography variant="body2" color="text.secondary">
              Declaração de Imposto de Renda
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
