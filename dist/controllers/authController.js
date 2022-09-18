"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../utils/types");
const jwt = require('jsonwebtoken');
const { secret, authPeriod } = require('../config');
class authController {
    constructor() {
        this.signIn = (req, res) => {
            const adminUser = {
                login: 'admin',
                email: 'admin@localhost',
                password: '123'
            };
            try {
                if (req.body.login !== adminUser.login && req.body.password !== adminUser.password) {
                    //ошибка не верный пароль
                    return res
                        .status(types_1.HTTP_STATUS.Not_Found_404)
                        .json({ message: 'User not exists or wrong password!' })
                        .end();
                }
                //пароль верный, генерируем токен
                const token = jwt.sign({
                    userLogin: adminUser.login,
                    userEmail: adminUser.email
                }, secret, { expiresIn: authPeriod });
                res.cookie('token', `Bearer ${token}`, { httpOnly: true, maxAge: 1000 * authPeriod });
                res
                    .status(types_1.HTTP_STATUS.OK_200)
                    .json({ message: 'sign in success' })
                    .end();
            }
            catch (e) {
                console.log(e);
            }
        };
        this.signOut = (req, res) => {
            try {
                res.clearCookie('token')
                    .status(types_1.HTTP_STATUS.Unauthorized_401)
                    .json({ message: 'sign out success' })
                    .end();
            }
            catch (e) {
                console.log(e);
            }
        };
        this.getMe = (req, res) => {
            try {
                if (!req.cookies['token']) {
                    return res
                        .status(types_1.HTTP_STATUS.Unauthorized_401)
                        .json({ message: 'Unauthorized' })
                        .end();
                }
                else {
                    const token = req.cookies['token'].split(' ')[1];
                    const authorizedUser = jwt.verify(token, secret);
                    return res
                        .status(types_1.HTTP_STATUS.OK_200)
                        .json({ login: authorizedUser.userLogin, email: authorizedUser.userEmail })
                        .end();
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
    }
}
module.exports = new authController;
