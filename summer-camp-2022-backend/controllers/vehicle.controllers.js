import VehicleServices from '../services/vehicle.services.js';
import logger from '../utilities/logger.js';

class VehicleController {
  static async getVehicles(req, res) {
    const { isAdmin } = req.user;
    
    try {
      if (!isAdmin) {
        const vehicles = await VehicleServices.findAvailableVehicles();
        logger.info(vehicles);
        return res.status(200).json(vehicles);
      }
      const vehicles = await VehicleServices.findVehicles();
      logger.info(vehicles);
      return res.status(200).json(vehicles);
    } catch (error) {
      logger.error(error);
      return res.json('Error occured while getting vehicles');
    }
  }
}

export default VehicleController;
