const Dev = require('../models/Dev');
const parseStringAsArray = require('../models/utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        //Buscar todos os Devs num raios de x KM
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return res.json({ devs });
    }
}