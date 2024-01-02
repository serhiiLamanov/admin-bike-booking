import express from "express"
import { calculateAverage, countAvailableBikes, countBikes, countBusyBikes, createBike, deleteBikeById, getBikeById, getBikes, updateBike } from "../db/actions.js"

const router = express.Router()

router.get('/', async (req, res) => res.json(await getBikes()))

router.post('/', async (req, res) => {
    console.log(req.body)
    try{
        res.status(201).json(await createBike(req.body))
    }catch(err){
        res.status(400).send(err.message)
    }    
})

router.patch('/:id', async (req, res) =>{
    try{ console.log(req.body)
        const bike = await getBikeById(req.params.id)
        bike.status = req.body.status
        // await updateBike(req.params.id, {status: req.body.status})
        await bike.save()
        res.sendStatus(200)
    }catch(err){
        res.status(400).send(err.message)
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        res.json(await deleteBikeById(req.params.id))
    }catch(err){
        res.status(400).send(err.message)
    }
})

router.get('/statistics', async(req, res) => {
    const totalBikes = await countBikes()
    const availableBikes = await countAvailableBikes()
    const busyBikes = await countBusyBikes()

    const averagePrice = (await calculateAverage("price")).toFixed(2)

    res.json({totalBikes, availableBikes, busyBikes, averagePrice})
})

export default router