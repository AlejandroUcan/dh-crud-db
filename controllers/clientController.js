const db = require('../database/models');

module.exports = { 
  list: (req, res) => {
    db.Cliente.findAll()
    .then(clients => {
      return res.status(200).json({
        total: clients.length,
        data: clients,
        status: 200
      })
    })    
  }, 
  details: (req, res) => {
    let clientId = req.params.id;
    db.Cliente.findByPk(clientId)
    .then(client => {
      return res.status(200).json({
        nombre: client.Name,
        email: client.Email,
        avatar: 'http://localhost:3000/images/avatars/' + client.Avatar,
        status: 200
      })
  	})
  },
  last: (req, res) => {
    db.Cliente.findAll({
      order: [
        ['ClientId', 'DESC'],
      ],
      limit: 1
    })
    .then(user => {
      return res.status(200).json({
        data: user,
        status: 200
      })
    })
  },  
}