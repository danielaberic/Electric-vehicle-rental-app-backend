import express from 'express';
import BookingController from '../controllers/booking.controllers.js'
import Authorization from '../middleware/authorization.js';

const bookingRouter = express.Router();

bookingRouter.get('/', Authorization.auth, async (req, res) => {
  await BookingController.getBookings(req, res);
});

bookingRouter.post('/scan', Authorization.auth, async (req, res) => {
  await BookingController.createBooking(req, res);
}); 

bookingRouter.post('/cancel', Authorization.auth, async (req, res) => {
  await BookingController.cancelBooking(req, res);
});

export default bookingRouter;
