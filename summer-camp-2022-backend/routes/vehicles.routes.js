import express from 'express';
import VehicleController from '../controllers/vehicle.controllers.js';
import authorization from '../middleware/authorization.js';

const vehicleRouter = express.Router();

vehicleRouter.get('/', authorization.auth, async (req, res) => {
  await VehicleController.getVehicles(req, res);
});

export default vehicleRouter;
