import * as React from "react";
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import { FaTrophy } from "react-icons/fa";

export default function OverflowCard() {
  return (
    <Stack
      classname="groupCard-Awards"
      style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2015
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2016
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2017
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2018
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2019
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2020
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2021
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2022
      </Card>
      <Card style={{ margin: "5px" }}>
        <FaTrophy className="iconCard-OverflowCard" />
        2023
      </Card>
    </Stack>
  );
}
