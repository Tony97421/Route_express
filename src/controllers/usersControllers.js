const database = require("../../database");

const getUsers = (req, res) => {
  
    database
    .query("SELECT * FROM users")
    .then(([users]) => {
      res.status(200).json(users);
    })
    .catch((err) => {
        console.error(err);
        
    })
  }

  const getUsersById = (req, res) =>{
    const id = parseInt(req.params.id);

    database
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([users]) => {
        if (users[0] != null) {
          res.json(users[0]);
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  

  module.exports = {
    getUsers,
    getUsersById
};