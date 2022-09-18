"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../utils/types");
{
    const response = require('../utils/response');
    const db = require('../utils/db');
    exports.getTasks = (req, res) => {
        db.query("SELECT * FROM `tasks`", (e, r, f) => {
            if (e) {
                response(types_1.HTTP_STATUS.Bad_Request_400, { message: 'Get tasks error' }, res);
            }
            else {
                response(types_1.HTTP_STATUS.OK_200, r, res);
            }
        });
    };
    exports.add = (req, res) => {
        const sql = "INSERT INTO `tasks`(`id`, `username`, `email`, `text`, `completed`) " +
            "VALUES (NULL, '" + req.body.login +
            "', '" + req.body.email +
            "', '" + req.body.text +
            "', '0')";
        db.query(sql, (e, r, f) => {
            if (e) {
                response(types_1.HTTP_STATUS.ServerError_500, { message: 'create task error' }, res);
            }
            else {
                response(types_1.HTTP_STATUS.Created_201, r, res);
            }
        });
    };
}
