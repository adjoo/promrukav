"use strict"
import {FieldInfo, MysqlError} from "mysql";
import {HTTP_STATUS} from "../utils/types";

{
    const response = require('../utils/response')
    const db = require('../utils/db')

    exports.getTasks = (req: any, res: any) => {
        db.query("SELECT * FROM `tasks`", (e: MysqlError, r: any, f: FieldInfo[]) => {
            if (e) {
                response(HTTP_STATUS.Bad_Request_400, {message: 'Get tasks error'}, res)
            } else {
                response(HTTP_STATUS.OK_200, r, res)
            }
        })
    }
    exports.add = (req: any, res: any) => {

        const sql = "INSERT INTO `tasks`(`id`, `username`, `email`, `text`, `completed`) " +
            "VALUES (NULL, '" + req.body.login +
            "', '" + req.body.email +
            "', '" + req.body.text +
            "', '0')"

        db.query(sql, (e: MysqlError, r: any, f: FieldInfo[]) => {
            if (e) {
                response(HTTP_STATUS.ServerError_500, {message: 'create task error'}, res)
            } else {
                response(HTTP_STATUS.Created_201, r, res)
            }
        })
    }

}