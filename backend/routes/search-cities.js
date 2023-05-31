import express from 'express'
import { db } from '../database.js'

const router = express.Router()

//  GET /api/search-cities?order=asc
router.get('/', async (req, res) => {
	// Vad har vi för querystring?
	// Baserat på query, välj vad vi ska göra
	const maybeOrder = req.query.order

	// Validering
	if( !maybeOrder ) {
		console.log('GET /api/search-cities !maybeOrder')
		res.sendStatus(400)
		return
	} else if( maybeOrder !== 'asc' && maybeOrder !== 'desc') {
		console.log('GET /api/search-cities fel värde på "order"')
		// Sortering måste vara antingen ASCending eller DESCending
		res.sendStatus(400)
		return
	}
	
	// Nu vet vi att "order" har ett giltigt värde
	let order = maybeOrder
	await db.read()
	let copy = [ ...db.data.cities ]
	// Obs! "sort" fungerar bara på strängar
	copy.sort(sortByName)
	if( order === 'desc' ) {
		copy.reverse()
	}
	res.send(copy)
})

function sortByName(a, b) {
	// console.log('sortByName called with ab=', a, b)
	if( a.name < b.name ) {
		return -1
	} else {
		return 1
	}
}

export default router
