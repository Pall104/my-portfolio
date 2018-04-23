var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Suggestion = require('../models/Suggestion.js');

/* GET ALL Suggestions */
router.get('/', function(req, res, next) {
    Suggestion.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE Suggestion BY ID */
router.get('/:id', function(req, res, next) {
    Suggestion.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Suggestion */
router.post('/', function(req, res, next) {
    Suggestion.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Suggestion */
router.put('/:id', function(req, res, next) {
    Suggestion.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
    Suggestion.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;