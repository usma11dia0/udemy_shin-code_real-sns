import Express, { Request, Response } from "express";
const postsRoute = Express.Router();

postsRoute.get("/", (req: Request, res: Response) => {
  res.send("posts router"); 
});

export default postsRoute;