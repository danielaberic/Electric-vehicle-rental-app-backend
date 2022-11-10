import models from '../models/index.js';
import logger from '../utilities/logger.js';
import BookingServices from './booking.services.js';

class UserServices {
  static async getUsers() {
    try {
      const users = await models.users.findAll({ raw: false });

      const mappedUsers = users.map(async (user) => ({
        ...(user.firstName !== null &&
          user.lastName !== null && {
            avatar:
              user.firstName.charAt(0).toUpperCase() +
              user.lastName.charAt(0).toUpperCase(),
          }),
        firstName: user.firstName,
        lastName: user.lastName,
        mail: user.email,
        dateCreated: user.createdAt,
        lastActive: await BookingServices.getBookingsEndedAt(user.id),
        totalRides: await BookingServices.countBookings(user.id),
      }));

      return await Promise.all(mappedUsers);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async findUser(email) {
    try {
      const user = await models.users.findOne({ where: { email } });
      return user;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
}

export default UserServices;
