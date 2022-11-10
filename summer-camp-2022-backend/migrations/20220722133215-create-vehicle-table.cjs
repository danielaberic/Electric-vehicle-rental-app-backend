module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      type: Sequelize.STRING(255),
      availability: Sequelize.BOOLEAN,
      battery: Sequelize.STRING(255),
      price: Sequelize.INTEGER,
      lat: Sequelize.INTEGER,
      lang: Sequelize.INTEGER,
      name: Sequelize.STRING(255),
      serial_number: Sequelize.STRING(255),
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
};
