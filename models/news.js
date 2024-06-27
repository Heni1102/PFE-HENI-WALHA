module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define('News', {
        Code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Libelle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        UrlPhoto1: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
    });
    return News;
};