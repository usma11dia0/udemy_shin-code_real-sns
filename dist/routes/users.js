"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute = express_1.default.Router();
userRoute.get("/", (req, res) => {
    res.send("user router");
});
exports.default = userRoute;
