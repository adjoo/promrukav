'use strict'
import {HTTP_STATUS} from "./types";

module.exports = (status: HTTP_STATUS, values: any, res: any) => {
    res.status(status)
    res.json(values)
    res.end()
}
