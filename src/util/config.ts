require('dotenv').config()

export const PORT: string | number = process.env.PORT || 3001;
export const DATABASE_URL: string = process.env.DATABASE_URL || '';