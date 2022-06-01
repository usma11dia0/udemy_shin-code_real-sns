"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const userRoute = express_1.default.Router();
//CRUD
//ユーザー情報の更新
userRoute.put("/:id", async (req, res) => {
    if (req.body._id === req.params.id || req.body.isAdmin) {
        try {
            const user = await User_1.default.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("ユーザー情報を更新しました");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        return res
            .status(403)
            .json("あなたは自分のアカウントの時だけ情報を更新できます");
    }
});
//ユーザー情報の削除
//ユーザー情報の取得
// userRoute.get("/", (req: Request, res: Response) => {
//   res.send("user router");
// });
exports.default = userRoute;
