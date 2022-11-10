module.exports = {
    up(queryInterface, Sequelize) {
      return queryInterface.addColumn('bookings', 'updated_at', {
        type: Sequelize.DATE,
      });
    },
  };