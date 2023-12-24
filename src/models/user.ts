import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

import { sequelize } from '../util/db'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare dateOfBirth: string;
    declare username: string;
    declare password: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    underscored: true,
    createdAt: true,
    updatedAt: true, 
    modelName: 'User',
})

export default User