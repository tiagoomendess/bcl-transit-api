import { Router } from "express";
import mainRouter from "./main";

const router: Router = Router();
router.use("/", mainRouter);

export default router;
