module.exports = {
    up(queryInterface, Sequelize) {
      return queryInterface.addColumn('bookings', 'created_at', {
        type: Sequelize.DATE,
      });
    },
  };