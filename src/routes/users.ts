import Express, { Request, Response } from "express";
const userRoute = Express.Router();

userRoute.get("/", (req: Request, res: Response) => {
  res.send("user router"); 
});

export default userRoute;
