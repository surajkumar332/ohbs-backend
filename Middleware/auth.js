import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers?.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

export default verifyToken;