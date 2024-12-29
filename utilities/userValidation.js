export function validateAdmin(req, res, next) {
    const user = req.user;

    if (!user) {
        return res.status(401).json(
            { message: "Please login to perform this action" }
        );
    }

    if (user.type !== "admin") {
        return res.status(403).json(
            { message: "Only admins are authorized to perform this action" }
        );
    }
    next();
}

export function validateCustomer(req, res, next) {
    const user = req.user;

    if (!user) {
        return res.status(401).json(
            { message: "Please login to perform this action" }
        );
    }

    if (user.type !== "customer" && user.type !== "admin") {
        return res.status(403).json(
            { message: "Only customers are authorized to perform this action" }
        );
    }
    next();
}