let models = require('../models/models')

module.exports = {
  getRoomRecommendations: function(req, res, next) {
    let roomNum = req.params.room 
    models.get(`select * from recommendations where roomId = ?`, [roomNum])
    .then(recommendationData => {
      res.send(recommendationData)
    })
  }
}

