const typeToAvatarMap = {
  '#VHC-SC-AE1500': 'bike.png',
  '#VHC-SC-MPS': 'bike-gold.png',
  '#VHC-SC-AES': 'scooter.png',
  '#VHC-SC-MP4': 'scooter.png',
  '#VHC-SC-BMF': 'skate.png',
  '#VHC-ST-MPS': 'skate-gold.png',
};

module.exports = {
  async up(queryInterface) {
    await Promise.all(
      Object.keys(typeToAvatarMap).map((key) =>
        queryInterface.sequelize.query(`
        UPDATE vehicles 
        SET avatar='${typeToAvatarMap[key]}' 
        WHERE serial_number="${key}";`)
      )
    );
  },
};
