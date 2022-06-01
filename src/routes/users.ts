import Express, { Request, Response } from "express";
import User, { IUser } from "../models/User";
const userRoute = Express.Router();

interface UserUpdateRequest<T> extends Request {
  body: T;
  params: {
    id?: string;
  };
}

//CRUD
//ユーザー情報の更新
userRoute.put("/:id", async (req: UserUpdateRequest<IUser>, res: Response) => {
  if (req.body._id === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("ユーザー情報を更新しました");
    } catch (err: unknown) {
      return res.status(500).json(err);
    }
  } else {
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

export default userRoute;
