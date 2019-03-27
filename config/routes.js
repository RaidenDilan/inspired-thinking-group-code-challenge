const router   = require('express').Router();
const vehicles = require('../controllers/vehicles');

router.route('/vehicles')
  .get(vehicles.index);

router.route('/vehicles/:id')
  .get(vehicles.show);

router.all('*', (req, res) => res.notFound());

module.exports = router;
