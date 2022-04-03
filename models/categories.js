module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  Category.associate = (models) => {
    Category.belongsTo(models.PostsCategory, { 
      as: 'categories', 
      foreignKey: 'id', 
    });
  };

  return Category;
};
