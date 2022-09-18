"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../controllers/controller"));
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryResult = yield controller_1.default.get();
    res.json(queryResult);
}));
router.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const formFields = Object.assign({}, req.body);
    const queryResult = yield controller_1.default.post(formFields);
    res.send(queryResult);
}));
module.exports = router;
