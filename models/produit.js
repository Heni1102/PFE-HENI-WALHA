module.exports = (sequelize, DataTypes) => {
    const Produit = sequelize.define('Produit', {
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
        Prix: {
            type: DataTypes.DOUBLE,
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
        UrlPhoto2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        UrlPhoto3: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Produit;
};
