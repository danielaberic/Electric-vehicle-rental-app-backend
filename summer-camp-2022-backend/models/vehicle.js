export default (sequelize, DataTypes) => {
  const vehicles = sequelize.define(
    'vehicles',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      avatar: DataTypes.STRING,
      type: DataTypes.STRING,
      availability: DataTypes.BOOLEAN,
      battery: DataTypes.STRING,
      price: DataTypes.INTEGER,
      lat: DataTypes.INTEGER,
      lang: DataTypes.INTEGER,
      name: DataTypes.STRING,
      serialNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      underscored: true,
      tableName: 'vehicles',
    }
  );

  return vehicles;
};
