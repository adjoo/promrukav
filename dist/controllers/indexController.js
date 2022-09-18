"use strict";
{
    const response = require('../utils/response');
    exports.index = (req, res) => {
        response.send('hello', res);
    };
}
