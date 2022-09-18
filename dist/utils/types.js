"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUS = exports.resultCode = void 0;
var resultCode;
(function (resultCode) {
    resultCode[resultCode["success"] = 0] = "success";
    resultCode[resultCode["error"] = 1] = "error";
})(resultCode = exports.resultCode || (exports.resultCode = {}));
var HTTP_STATUS;
(function (HTTP_STATUS) {
    HTTP_STATUS[HTTP_STATUS["OK_200"] = 200] = "OK_200";
    HTTP_STATUS[HTTP_STATUS["Created_201"] = 201] = "Created_201";
    HTTP_STATUS[HTTP_STATUS["No_Content_204"] = 204] = "No_Content_204";
    HTTP_STATUS[HTTP_STATUS["Bad_Request_400"] = 400] = "Bad_Request_400";
    HTTP_STATUS[HTTP_STATUS["Unauthorized_401"] = 401] = "Unauthorized_401";
    HTTP_STATUS[HTTP_STATUS["Not_Found_404"] = 404] = "Not_Found_404";
    HTTP_STATUS[HTTP_STATUS["ServerError_500"] = 500] = "ServerError_500";
})(HTTP_STATUS = exports.HTTP_STATUS || (exports.HTTP_STATUS = {}));
