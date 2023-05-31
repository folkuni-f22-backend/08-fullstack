import express from 'express'
import { db } from '../database.js'

const router = express.Router()

//  GET /api/cities
router.get('/', async (req, res) => {
	await db.read()
	const cities = db.data.cities
	res.send(cities)
})

//  GET /api/cities/:id

export default router
