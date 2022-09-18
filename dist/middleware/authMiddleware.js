"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../utils/types");
const jwt = require('jsonwebtoken');
const { secret } = require('../config');
module.exports = (req, res, next) => {
    try {
        if (!req.cookies['token']) {
            return res
                .status(types_1.HTTP_STATUS.Unauthorized_401)
                .json({ message: 'Unauthorized' })
                .end();
        }
        else {
            try {
                const token = req.cookies['token'].split(' ')[1];
                jwt.verify(token, secret);
                next();
            }
            catch (e) {
                console.log(e);
                return res
                    .status(types_1.HTTP_STATUS.Unauthorized_401)
                    .json({ message: 'Unauthorized' })
                    .end();
            }
        }
    }
    catch (e) {
        console.log(e);
        return res
            .status(types_1.HTTP_STATUS.Unauthorized_401)
            .json({ message: 'Unauthorized' })
            .end();
    }
};
