module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
    }, {
        tableName: 'users',
        timestamp: true
    });

    return User;
}