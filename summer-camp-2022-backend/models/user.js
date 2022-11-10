import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      underscored: true,
      tableName: 'users',
      hooks: {
        beforeCreate(user) {
          if (user.password) {
            // eslint-disable-next-line no-param-reassign
            user.password = bcrypt.hashSync(user.password, 10);
          }
        },
      },
    }
  );

  return users;
};
