import Express, { Request, Response } from "express";
const authRoute = Express.Router();

authRoute.get("/", (req: Request, res: Response) => {
  res.send("auth router"); 
});

export default authRoute;

