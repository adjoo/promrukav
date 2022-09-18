"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const config = require('../config');
const connection = mysql_1.default.createConnection({
    host: config.HOST,
    user: config.DBUSER,
    password: config.DBPASSWORD,
    database: config.DBNAME
});
connection.connect((error) => {
    if (error) {
        return console.log('Database connection error');
    }
    else {
        return console.log('Database connected!');
    }
});
module.exports = connection;
