import express from 'express';
import { createBooking, deleteBooking, getBookings } from '../controllers/bookingController.js';
import { validateCustomer } from '../utilities/userValidation.js';

const bookingRouter = express.Router();

bookingRouter.get("/", getBookings);

bookingRouter.post("/", validateCustomer, createBooking);

bookingRouter.delete("/:bookingId", validateCustomer, deleteBooking);

export default bookingRouter;