const express = require("express");
const teams = require("./teams");
const app = express();
const { getTeams, getTeamById } = require("./controllers/teams");

app.get("/", getTeams);
app.get("/:id", getTeamById);
app.listen(1337, () => {
  console.log("listening to port 1337 ...");
});
