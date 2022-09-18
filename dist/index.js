"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { secret } = require('./config');
const app = (0, express_1.default)();
const port = 5000;
const cookieParser = require('cookie-parser');
const cors = require("cors");
const path = require('path');
app.use(express_1.default.json());
app.use(cookieParser(secret));
app.use(cors());
app.use(express_1.default.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build'));
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = require("./routes");
router(app);
//404//
app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});
app.listen(port);
