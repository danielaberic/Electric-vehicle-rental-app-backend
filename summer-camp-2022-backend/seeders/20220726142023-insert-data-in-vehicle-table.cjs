module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('vehicles', [
      {
        type: 'Bike',
        availability: true,
        battery: '90%',
        price: 10,
        lat: 45,
        lang: 15,
        name: 'AOSTIMOTOR',
        serial_number: '#VHC-SC-AE1500',
        created_at: new Date(),
      },
      {
        type: 'Bike',
        availability: true,
        battery: '88%',
        price: 10,
        lat: 46,
        lang: 15,
        name: 'Hboy MAx3',
        serial_number: '#VHC-SC-MPS',
        created_at: new Date(),
      },
      {
        type: 'Scooter',
        availability: true,
        battery: '75%',
        price: 20,
        lat: 45,
        lang: 17,
        name: 'Meepo Shuffle S',
        serial_number: '#VHC-SC-AES',
        created_at: new Date(),
      },
      {
        type: 'Scooter',
        availability: true,
        battery: '17%',
        price: 20,
        lat: 44,
        lang: 13,
        name: 'Meepo Shuffle S 4',
        serial_number: '#VHC-SC-MP4',
        created_at: new Date(),
      },
      {
        type: 'Skate',
        availability: true,
        battery: '100%',
        price: 10,
        lat: 43,
        lang: 15,
        name: 'BOUNDMOTOR',
        serial_number: '#VHC-SC-BMF',
        created_at: new Date(),
      },
      {
        type: 'Skate',
        availability: true,
        battery: '95%',
        price: 10,
        lat: 45,
        lang: 14,
        name: 'GEEKMAXI',
        serial_number: '#VHC-ST-MPS',
        created_at: new Date(),
      },
    ]),
};
