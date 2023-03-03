module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        title: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

        total_pages: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },

        author: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

        release_year: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        stock: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
    }, {
        tableName: 'books',
        timestamp: true
    });

    return Book;
}