import { Sequelize } from 'sequelize'
import { DATABASE_URL } from './config'

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres'
})

const connectToDatabase = async (): Promise<void | null> => {
  try {
    await sequelize.authenticate()
    console.log('database connected')
  } catch (err) {
    console.log('connecting database failed')
    return process.exit(1)
  }
  return null
}

export { connectToDatabase, sequelize }