import { constants } from "../constants.js";

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode) {
        case constants.VALIDATION_ERROR:
            res.send({
                title: "Validation error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            case constants.FORBIDDEN:
            res.send({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            case constants.NOT_FOUND:
            res.send({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            case constants.UNAUTHORIZED:
            res.send({
                title: "unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            case constants.SERVER_ERROR:
            res.send({
                title: "server error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            res.send({
                title: "unexpected error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
    }
}