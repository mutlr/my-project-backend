import express from 'express'

const app = express()
app.use(express.json())


app.get('/', (_req, res) => {
    res.send('init')
})
app.listen(3001, () => {
    console.log('Server running')
})