const { Cars } = require('../models')

const carsdata = [
    {

    }  
]

const seedCars = () => Cars.bulkCreate(carsdata);

module.exports = seedCars;
