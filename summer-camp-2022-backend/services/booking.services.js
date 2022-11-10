import models from '../models/index.js';
import logger from '../utilities/logger.js';

class BookingServices {
  static async findAndCountBookings(isAdmin, id) {
    try {
      if (isAdmin) {
        const { count: numberOfBookings, rows } =
          await models.bookings.findAndCountAll();
        return { numberOfBookings, rows };
      } else {
        const { count: numberOfBookings, rows } =
          await models.bookings.findAndCountAll({
            where: {
              userId: id,
            },
          });
        return { numberOfBookings, rows };
      }
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  static async countBookings(id) {
    try {
      console.log(`There are ${await models.bookings.count()} bookings`);
      const amount = await models.bookings.count({
        where: {
          userId: id,
        },
      });
      console.log(`There are ${amount} bookings from user with id ${id}`);
      return amount;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  static async getBookingsEndedAt(id) {
    try {
      const booking = await models.bookings.findOne({
        where: {
          userId: id,
        },
      });
      return booking.endedAt;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  static async findBooking(vehicleid, userid) {
    try {
      const booking = await models.bookings.findOne({
        where: { vehicleId: vehicleid, userId: userid, endedAt: null },
        includes: [{ model: models.vehicles }, { model: models.users }],
      });
      return booking;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
}

export default BookingServices;
