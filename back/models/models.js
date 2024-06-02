const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
});

const Rent = sequelize.define('Rent', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
});

const Review = sequelize.define('Review', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    avatar: { type: DataTypes.STRING, allowNull: false },
    review: { type: DataTypes.STRING, allowNull: false },
});

const Application = sequelize.define('Application', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    processed: { type: DataTypes.BOOLEAN, defaultValue: false },
    reservation: { type: DataTypes.BOOLEAN, defaultValue: false },
    rent: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Rent.hasMany(Application);
Application.belongsTo(Rent);

module.exports = {
    User, Rent, Review, Application
};





