module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  Categories.associate = (models) => {
    Categories.belongsTo(models.PostsCategories, { 
      as: 'categories', 
      foreignKey: 'id', 
    });
  };

  return Categories;
};
