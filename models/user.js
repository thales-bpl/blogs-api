module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { 
      as: 'posts', 
      foreignKey: 'userId', 
    });
  };

  return User;
};
