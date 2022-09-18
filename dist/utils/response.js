'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (status, values, res) => {
    res.status(status);
    res.json(values);
    res.end();
};
