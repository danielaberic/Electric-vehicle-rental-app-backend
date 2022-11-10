module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('bookings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      vehicle_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: {
            tableName: 'vehicles',
          },
          key: 'id',
        },
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: false,
      },
      started_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ended_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
};
