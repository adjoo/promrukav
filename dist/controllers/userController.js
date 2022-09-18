"use strict";
{
    const response = require('../utils/response');
    exports.users = (req, res) => {
        const users = [
            {
                id: 1,
                name: 'alex',
            }, {
                id: 2,
                name: 'mike',
            }
        ];
        response.status(users, res);
    };
}
