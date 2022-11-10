module.exports = {
    up(queryInterface, Sequelize) {
      return queryInterface.addColumn(
        'users',
        'email',{
            type:Sequelize.STRING,
            allowNull: false,
        }        
      );  
    },
  };