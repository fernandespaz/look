
const Dev = require('../models/dev');  
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

 async Index(req,res) {
     const{ latitude, longitude, techs} = req.query;

     const techsArrays = parseStringAsArray(techs);
   
    const devs = await Dev.find({
      techs: {
          $in:techsArrays,
      },
      location: {
          $near: {
              $geometry: {
                type: 'Point',
                coordinates:[parseFloat(latitude) ,parseFloat(longitude) ],
          },
          $maxDistance: 1000,
        },
      },
    });

    return res.json({devs});
 }

}