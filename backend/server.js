import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import citiesRouter from './routes/cities.js'

const app = express()
const port = process.env.PORT || 1234

app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}`, req.body);
	next()
})

//   /api/cities
app.use('/api/cities', citiesRouter)


app.listen(port, () => {
	console.log(`Server listening on port ${port}...`)
})
