import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const port = 8000
const mongoUri = 'mongodb://127.0.0.1:27017/octofit'

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running.' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', port: port })
})

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB on port 27017')
    app.listen(port, () => {
      console.log(`Backend listening on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  })
