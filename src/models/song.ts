import { Model, DataTypes, InferAttributes, InferCreationAttributes, ForeignKey, } from 'sequelize'
import { sequelize } from '../util/db'
import Artist from './artist';

class Song extends Model<InferAttributes<Song>, InferCreationAttributes<Song>> {
    declare id: string;
    declare name: string;
    declare artistId: ForeignKey<Artist['id']>
}

Song.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    underscored: true,
    createdAt: true,
    updatedAt: true,
    modelName: 'Song'
})

export default Song