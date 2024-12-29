import express from 'express';
import { createBooking, getBookings } from '../controllers/bookingController.js';
import { validateCustomer } from '../utilities/userValidation.js';

const bookingRouter = express.Router();

bookingRouter.post("/", validateCustomer, createBooking);

bookingRouter.get("/", getBookings);

export default bookingRouter;