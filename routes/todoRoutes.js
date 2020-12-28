const express = require('express');
const router = express.Router();
const List = require('../models/dataSchema');


/** post method to create new list */
router.post('/create', (req, res, next) => {
    const newList = new List({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate
    });
    newList.save((err,list) => {
        if (err) {
            res.status(500).json({errorMessage: err});
        } else {
            res.status(200).json({list});
        }
    })
});


/** get method to read list */
router.get('/read', (req, res, next) => {
    List.find({},(err, lists) => {
        if (err) {
            res.status(500).json({errorMessage: err});
        } else {
            res.status(200).json({lists});
        }
    });
});


/** put method to update list  */
router.put('/update', (req, res, next) => {
    List.findById(req.body._id, (err, list) => {
        if (err) {
            res.status(500).json({errorMessage: err});
        } else {
            list.title = req.body.title;
            list.description = req.body.description;
            list.dueDate =req.body.dueDate;
            list.save((err, list) => {
                if (err) {
                    res.status(500).json({errorMessage: err});
                } else {
                    res.status(200).json({list});
                }
            });
        }
    });
});

/** delete method to delete required list */
router.delete('/delete/:id', (req, res, next) => {
    List.findOneAndRemove({_id: req.params.id},(err,list) => {
        if (err) {
            res.status(500).json({errorMessage: err});
        } else {
            res.status(200).json({list});
        }
    });
});

module.exports = router;
