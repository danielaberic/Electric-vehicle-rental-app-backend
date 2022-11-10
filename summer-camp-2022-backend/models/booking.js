export default (sequelize, DataTypes) => {
  const bookings = sequelize.define(
    'bookings',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },

      vehicleId: DataTypes.INTEGER(11),
      userId: DataTypes.INTEGER(11),
      startedAt: DataTypes.DATE,
      endedAt: DataTypes.DATE,
    },
    {
      underscored: true,
      tableName: 'bookings',
    }
  );

  return bookings;
};
