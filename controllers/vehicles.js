const rp = require('request-promise');

function getVehicles(req, res) {
  rp({
    method: 'GET',
    url: 'https://itg-prd-recruit.appspot.com/api/vehicles',
    json: true
  })
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(500).json(err));
}

function getVehicleById(req, res) {
  const baseUrl = 'https://itg-prd-recruit.appspot.com/api/vehicle/';
  rp({
    method: 'GET',
    url: `${baseUrl}${req.params.id}`,
    json: true
  })
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(404).json(err));
}

module.exports = {
  index: getVehicles,
  show: getVehicleById
};
