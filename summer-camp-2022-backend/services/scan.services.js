import models from '../models/index.js';
import logger from '../utilities/logger.js';

class ScanServices {
  static async findVehicle(serialNumber) {
    try {
      const vehicle = await models.vehicles.findOne({
        where: { serialNumber },
      });
      return vehicle;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
}

export default ScanServices;
