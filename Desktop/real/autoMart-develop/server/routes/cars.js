const expresss = require('express');
const router = express.Router()




const cars = [
    { id: 1, owner: 'Kanyandekwe', createdOn: '2015', state: 'New', status: 'available', price: '15.5$', manufacturer: 'Honda',model: 'right', body_type: 'Trailer'},
    { id: 2, owner: 'Kanya', createdOn: '2015', state: 'New', status: 'sold', price: '20.5$', manufacturer: 'Toyota',model: 'left', body_type: 'Truck'},
    { id: 3, owner: 'Andekwe', createdOn: '2015', state: 'New', status: 'available', price: '150.5$', manufacturer: 'Honda',model: 'right', body_type: 'car'},
];


router.get('/', (req, res) => {
    res.send(cars);
});

router.get('/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('The car with the given ID is not found.');
    res.send(car);
});

router.post('/', (req, res) => {
    //  VALIDATION WITH JOI
//      ---------------------
//       const { error } = validateCar(req.body);
//     if(error) return res.status(400).send(result.error.detais[0].message);

    const car = {
        id: cars.length + 1,
        owner: req.body.owner,
        createdOn: req.body.createdOn,
        state: req.body.state,
        status: req.body.status,
        price: req.body.price,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        body_type: req.body.body_type
    };
    cars.push(car);
    res.send(car);
});
router.put('/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('The car with the given ID is not found.');
    
    
   // const { error } = validateCar(req.body);
    //     if(error)  return res.status(400).send(result.error.detais[0].message);

     car.status = req.body.status;
     car.price = req.body.price;
     
     res.send(car);

});
 //function validateCar(car){
    //const schema = {
      // owner: Joi.string().min(3).required()
     //};
     
     //  return  Joi.validate(course, schema);
 //}

router.delete('/:id', (req, res) => {

    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('The car with the given ID is not found.');

    const index = cars.indexO(car);
    cars.splice(index, 1);
    
    res.send(car);


});
module.exports =  router;