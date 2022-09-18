import { NextFunction} from "express";
import {HTTP_STATUS} from "../utils/types";

const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = (req: any, res: any, next: NextFunction) => {
    try {
        if (!req.cookies['token']) {
            return res
                .status(HTTP_STATUS.Unauthorized_401)
                .json({message: 'Unauthorized'})
                .end()
        } else {
            try{
                const token = req.cookies['token'].split(' ')[1]
                jwt.verify(token, secret)
                next()
            }catch(e){
                console.log(e)
                return res
                    .status(HTTP_STATUS.Unauthorized_401)
                    .json({message: 'Unauthorized'})
                    .end()
            }
        }
    } catch(e) {
        console.log(e)
        return res
            .status(HTTP_STATUS.Unauthorized_401)
            .json({message: 'Unauthorized'})
            .end()
    }



}