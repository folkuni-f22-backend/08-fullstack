import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import citiesRouter from './routes/cities.js'
import searchRouter from './routes/search-cities.js'

const app = express()
const port = process.env.PORT || 1234

app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}`, req.body);
	next()
})

//   /api/cities
app.use('/api/cities', citiesRouter)

//  /api/search-cities
app.use('/api/search-cities', searchRouter)


app.listen(port, () => {
	console.log(`Server listening on port ${port}...`)
})
