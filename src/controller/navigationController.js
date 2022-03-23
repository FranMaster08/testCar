const { exec } = require("child_process");
const db = [
  {
    idCamion: 10,
    ip: "192.168.23.200",
  },
];

const navigationController = {
  getHome: (req, res, next) => {
    res.render("index", { title: "Fran Generator" });
  },
  buscarCamion: (req, res, next) => {
    const { id } = req.params;
    const camionBuscado = db.find((camion) => camion.idCamion == id);
    exec(`telnet 192.168.23.200`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      res.send(`stdout: ${stdout}`);
    });
  },
};

module.exports = navigationController;
