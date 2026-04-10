import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const header = req.headers?.authorization;

    if (!header) {
        return res.status(401).json({ message: "no token provided" });
    }

    const token = header.split(" ")[1];

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

export default verifyToken;