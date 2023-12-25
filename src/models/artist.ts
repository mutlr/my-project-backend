import { Model, DataTypes, InferAttributes, InferCreationAttributes, } from 'sequelize'
import { sequelize } from '../util/db'

class Artist extends Model<InferAttributes<Artist>, InferCreationAttributes<Artist>> {
    declare id: string;
    declare name: string;
}

Artist.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    underscored: true,
    createdAt: true,
    updatedAt: true,
    modelName: 'Artist'
})

export default Artist