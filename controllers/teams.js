const teams = require("../teams");
const getTeams = (req, res) => {
  return res.send(teams);
};
const getTeamById = (req, res) => {
  const id = parseInt(req.params.id);
  const foundTeam = teams.filter((team) => team.id === id);
  console.log(foundTeam);
  return res.send(foundTeam);
};
module.exports = { getTeams, getTeamById };
