const teams = require("../teams");
const getTeams = (req, res) => {
  return res.send(teams);
};
const getTeamById = (req, res) => {
  const { id } = req.params;
  const foundTeam = teams.filter((team) => team.id === id);
  return res.send(foundTeam);
};
module.exports = { getTeams, getTeamById };
