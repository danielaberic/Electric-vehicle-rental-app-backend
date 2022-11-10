import { v4 as uuidv4 } from 'uuid';
import models from '../models/index.js';
import logger from '../utilities/logger.js';
import ScanServices from '../services/scan.services.js';
import BookingServices from '../services/booking.services.js';

class BookingController {
  static async createBooking(req, res) {
    const { serialNumber } = req.body;

    if (!serialNumber) {
      return res.status(400).json({
        error: 'Bad request.',
      });
    }

    const { id } = req.user;

    const vehicle = await ScanServices.findVehicle(serialNumber);

    if (!vehicle) {
      return res.status(401).json({
        error: 'Vehicle does not exist.',
      });
    }

    if (vehicle.availability) {
      const startedAt = new Date();

      try {
        const booking = await models.bookings.create({
          id: uuidv4(),
          userId: id,
          vehicleId: vehicle.id,
          startedAt,
        });
        logger.info(booking);

        await models.vehicles.update(
          { availability: false },
          { where: { serialNumber } }
        );

        return res.status(200).send({
          booking,
        });
      } catch (error) {
        logger.error(error);
        console.log(error);
        return res.json('Error occured while creating booking');
      }
    }
    return res.json('Vehicle is not available');
  }

  static async getBookings(req, res) {
    try {
      const bookings = await BookingServices.findAndCountBookings(req.user.isAdmin, req.user.id);
      logger.info(bookings);
      res.json(bookings);
    } catch (error) {
      logger.error(error);
      return console.log('Error occured while getting bookings');
    }
  }

  static async cancelBooking(req, res) {
    const { serialNumber } = req.body;
    const { id } = req.user;

    if (!serialNumber) {
      return res.status(400).json({
        error: 'Bad request.',
      });
    }

    const vehicle = await ScanServices.findVehicle(serialNumber);
    const vehicleid = vehicle.id;

    if (!vehicle) {
      return res.status(401).json({
        error: 'Vehicle does not exist.',
      });
    }

    const booking = await BookingServices.findBooking(vehicleid, id);

    if (booking) {
      if (id === booking.userId) {
        const endedat = new Date();
        await models.vehicles.update(
          { availability: true },
          { where: { id: vehicleid } }
        );
        await models.bookings.update(
          { endedAt: endedat },
          { where: { vehicleId: vehicleid } }
        );
        return res.status(200).json({ success: 'ok' });
      }
      return res.status(403).json({
        error: 'User is not available to enter booking.',
      });
    }

    return res.status(404).json('Booking does not exist');
  }
}
export default BookingController;
