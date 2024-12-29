import Booking from "../models/bookingsModel.js";

export async function getBookings(req, res) {
    try {
        const bookingsList = await Booking.find({});
        res.json(
            { list: bookingsList }
        );
    } catch (err) {
        res.status(500).json({
            message: "Error finding booking list",
            error: err.message,
        });
    }
}

export async function createBooking(req, res) {
    const { roomId, email, startDate, endDate } = req.body;

    if (!roomId || !email || !startDate || !endDate) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    if (new Date(startDate) >= new Date(endDate)) {
        return res.status(400).json({ message: "Invalid dates! Start date must be earlier than end date" });
    }

    try {
        const bookingId = (await Booking.countDocuments()) + 1;
        const newBooking = await Booking.create({ bookingId, roomId, email, startDate, endDate });

        res.json(
            { message: "Booking saved to database successfully", data: newBooking }
        );
    } catch (err) {
        res.status(500).json({ message: "Error creating booking", error: err.message });
    }
}

export async function deleteBooking(req, res) {
    try {
        const deletedBooking = await Booking.findOneAndDelete({ bookingId: req.params.bookingId });
        res.json(
            {
                message: "Booking No: " + deletedBooking.bookingId + " deleted successfully"
            }
        )
    } catch (err) {
        res.status(500).json(
            { 
                message: "Error founding booking by booking No: " + req.params.bookingId + ". Check the booking ID and try again.",
                error: err.message
            }
        );
    }
}