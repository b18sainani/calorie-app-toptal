// meal.route.js

const express = require('express');
const mealRoutes = express.Router();

// Require Meal model in our routes module
let Meal = require('../../models/Meal');

// Defined store route
mealRoutes.route('/add').post(function (req, res) {
    let meal = new Meal(req.body);
    meal.save()
        .then(meal => {
            res.status(200).json(meal);
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
mealRoutes.route('/').get(function (req, res) {
    Meal.find(function (err, meales) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(meales);
        }
    });
});

// Defined edit route
mealRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Meal.findById(id, function (err, meal) {
        res.json(meal);
    });
});

//  Defined update route
mealRoutes.route('/update/:id').post(function (req, res) {
    Meal.findById(req.params.id, function (err, meal) {
        if (!meal)
            res.status(404).send("data is not found");
        else {
            meal.model_name = req.body.model_name;
            meal.meal_color = req.body.meal_color;
            meal.location = req.body.location;
            meal.rating = req.body.rating;
            meal.isAvailable = req.body.isAvailable;
            meal.save().then(meal => {
                res.status(200).json(`${meal.model_name} Updated Successfully in Database`);
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
mealRoutes.route('/delete/:id').get(function (req, res) {
    Meal.findByIdAndRemove({ _id: req.params.id }, function (err, meal) {
        if (err) res.json(err);
        else res.status(200).json(`${req.params.model_name} deleted successfully`);
    });
});

module.exports = mealRoutes;