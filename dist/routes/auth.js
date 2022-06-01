"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoute = express_1.default.Router();
authRoute.get("/", (req, res) => {
    res.send("auth router");
});
exports.default = authRoute;
