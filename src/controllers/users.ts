import express from 'express'
import { User } from '../models'

const router = express.Router()

router.get('/', async (_req, res) => {
    const users = await User.findAll()
    res.status(200).json({users})
})
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({error})
    }
})

export default router