import express from 'express';

import userRouter from './users.routes.js';
import vehicleRouter from './vehicles.routes.js';
import bookingRouter from './bookings.routes.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/vehicles', vehicleRouter);
router.use('/bookings', bookingRouter);

export default router;
