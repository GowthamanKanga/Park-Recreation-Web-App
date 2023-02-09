const express = require('express')
const route = express.Router()
const equipment = require('../models/amentity')

route.post('/amenities', async(req, res) => {
    const newAmentity = req.body;
    if(JSON.stringify(newAmentity) == null || JSON.stringify(newAmentity) == '{}') {
        return res.status(400).send({
            message: "facility's content can not be empty"
        });
    }
    else {

    try {
        const item = new equipment(newAmentity)
        await item.save()
        res.status(201).send(item)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});

route.get('/amenities', async(req, res) => {
    try {
        const amentities = await equipment.find({})
        res.status(200).send(amentities)
    }
    catch(error) {
        res.status(500).send(error)
    }
});
route.get('/amenities/search', async(req, res) => {
    let keyword = req.query.keyword

    if(JSON.stringify(keyword) == null || JSON.stringify(keyword) == '{}') {
        return res.status(400).send({
            message: "Facility's keyword can not be empty"
        });
    }
    else {
    try {
        const amentities = await equipment.find({ $or: [{facilityName: `/^${keyword} `}, {facilityName: `/${keyword} $/`}, {facilityName: `/ ${keyword} /`}
    , {facilityName: `/^${keyword}`}, {facilityName: `${keyword}$/`}, {facilityName: `/${keyword}/`}]})
        res.status(200).send(amentities)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});


route.get('/amenities/:id', async(req, res) => {

    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Facility content can not be empty"
        });
    }
    else {
    
    try {
        const item = await equipment.findById(id)
        res.status(200).send(item)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});



route.patch('/amentities/:id', async (req, res) => {
    try {
      const amentity = await Amentity.findById(req.params.id)
      if (!amentity) {
        return res.status(404).send()
      }
      amentity.occupiedAmount = req.body.occupiedAmount
      await amentity.save()
      res.send(amentity)
    } catch (e) {
      res.status(400).send(e)
    }
  })
  


route.delete('/amenities/:id', async (req, res) => {
    // Validate request
    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Facilities's content can not be empty"
        });
    }

    else {
    try {
        const facility = await equipment.findByIdAndDelete(id)
    
        if (!facility) { 
            res.status(404).send("No item found")
        }
        res.status(204).send(facility)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});
module.exports = route


