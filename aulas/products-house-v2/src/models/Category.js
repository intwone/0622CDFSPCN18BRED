module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'categories',
    timestamps: false
  })

  return Category
}
