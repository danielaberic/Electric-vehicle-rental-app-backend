module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('vehicles', 'serial_number', {
      type: Sequelize.STRING(255),
      unique: true,
    });
  },
};
