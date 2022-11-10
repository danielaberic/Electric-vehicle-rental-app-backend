module.exports = {
  async up(queryInterface) {
    const allUsers = await queryInterface.sequelize.query(
      'SELECT id, email FROM users'
    );

    allUsers[0].map((user) =>
      queryInterface.sequelize.query(`
        UPDATE users 
            SET email='${user.email.toLowerCase()}'
            WHERE id="${user.id}";`)
    );
  },
};
