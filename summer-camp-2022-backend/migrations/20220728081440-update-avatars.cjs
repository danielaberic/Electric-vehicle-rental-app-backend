module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('vehicles', 'avatar', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
