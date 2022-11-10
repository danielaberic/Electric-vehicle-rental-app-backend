import models from '../models/index.js';
import logger from '../utilities/logger.js';

class VehicleServices {
  static async findVehicles() {
    try {
      const vehicles = await models.vehicles.findAll();

      return vehicles.map((vehicle) => ({
        id: vehicle.id,
        avatar: `${process.env.HOST}/static/${vehicle.avatar}`,
        vehicleName: vehicle.name,
        vehicleType: vehicle.type,
        vehicleId: vehicle.serialNumber,
        vehicleStatus: vehicle.availability,
        vehicleBattery: vehicle.battery,
        location: {
          locationPoint: {
            lat: vehicle.lat,
            long: vehicle.lang,
          },
          locationString: `Makarska ulica ${Math.floor(
            Math.random() * 30 + 1
          )}`,
        },
      }));
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  static async findAvailableVehicles() {
    try {
      const availableVehicles = await models.vehicles.findAll({
        where: { availability: true },
      });

      return availableVehicles.map((vehicle) => ({
        id: vehicle.id,
        avatar: `${process.env.HOST}/static/${vehicle.avatar}`,
        vehicleName: vehicle.name,
        vehicleType: vehicle.type,
        vehicleId: vehicle.serialNumber,
        vehicleStatus: vehicle.availability,
        vehicleBattery: vehicle.battery,
        location: {
          locationString: `Makarska ulica ${Math.floor(
            Math.random() * 30 + 1
          )}`,
          locationPoint: { lat: vehicle.lat, long: vehicle.lang },
        },
      }));
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
}

export default VehicleServices;
