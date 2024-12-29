import Room from "../models/roomModel.js";

export async function getRooms(req, res) {
    try {
        const roomsList = await Room.find({});
        res.json(
            { list: roomsList }
        );
    } catch (err) {
        res.status(500).json(
            {
                message: "Error finding rooms list",
                error: err.message
            }
        );
    }
}

export async function getRoomById(req, res) {
    try {
        const room = await Room.findOne({ roomId: req.params.roomId });
        if (!room) {
            return res.status(404).json(
                { 
                    message: "No rooms found by id '" + req.params.roomId + "', Please check the id and try again."
                }
            );
        } else {
            res.json({ data : room});
        }
    } catch (err) {
        res.status(500).json(
            {
                message: "Error finding room by id",
                error: err.message
            }
        );
    }
}
export async function saveRoom(req, res) {
    try {
        const newRoom = new Room(req.body);
        await newRoom.save();
        res.json(
            {
                message: "Room saved to database successfully",
                data : newRoom
            }
        );
    } catch (err) {
        res.status(500).json(
            {
                message: "Error saving room to database",
                error: err.message
            }
        );
    }
}

export async function updateRoom(req, res) {
    try {
        const updatedRoom = await Room.findOneAndUpdate({ roomId: req.params.roomId }, req.body, { new: true });
        res.json(
            {
                message: "Room '" + updatedRoom.roomId + "' updated successfully",
                data : updatedRoom
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                message: "Error updating room",
                error: err.message
            }
        );
    }
}

export async function deleteRoom(req, res) {
    try {
        const deletedRoom = await Room.findOneAndDelete({ roomId: req.params.roomId });
        res.json(
            {
                message: "Room '" + deletedRoom.roomId + "' deleted successfully"
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                message: "Error deleting room",
                error: err.message
            }
        );
    }
}