import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

const app = express()
const port = process.env.PORT || 1234

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`)
})
