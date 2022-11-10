module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: Sequelize.STRING(255),
      last_name: Sequelize.STRING(255),
      username: Sequelize.STRING(255),
      password: Sequelize.STRING(255),
      is_admin: Sequelize.BOOLEAN,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
};
