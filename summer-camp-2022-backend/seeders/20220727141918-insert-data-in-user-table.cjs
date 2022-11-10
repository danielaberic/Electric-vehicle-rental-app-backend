module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('users', [
      {
        first_name: 'Josipa',
        last_name: 'Krizanac',
        password:
          '$2b$10$HtpSylORWwI2FBlUNaSgTOVQhD2pnZLhGPNbonpP7bBQyVSWQK6mS',
        is_admin: true,
        created_at: new Date(),
        email: 'Jops@gmail.com',
      },
      {
        first_name: 'Admin',
        last_name: 'Admin1',
        password:
          '$2b$10$HtpSylORWwI2FBlUNaSgTOVQhD2pnZLhGPNbonpP7bBQyVSWQK6mS',
        is_admin: true,
        created_at: new Date(),
        email: 'Admin@gmail.com',
      },
      {
        first_name: 'Daniela',
        last_name: 'Beric',
        password:
          '$2b$10$HtpSylORWwI2FBlUNaSgTOVQhD2pnZLhGPNbonpP7bBQyVSWQK6mS',
        is_admin: false,
        created_at: new Date(),
        email: 'Danci@gmail.com',
      },
      {
        first_name: 'Roko',
        last_name: 'Lolic',
        password:
          '$2b$10$HtpSylORWwI2FBlUNaSgTOVQhD2pnZLhGPNbonpP7bBQyVSWQK6mS',
        is_admin: false,
        created_at: new Date(),
        email: 'Roko@gmail.com',
      },
    ]),
};
