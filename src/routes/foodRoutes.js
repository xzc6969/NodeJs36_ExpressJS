import express from "express";
import {
  addLike,
  creatNewRate,
  getListLikeByRes,
  getListLikeByUser,
  getListUserLike,
  unLike,
  getListRateByRes,
  getListRateByUser,
  order,
  listOrders
} from "../controllers/foodController.js";
const foodRoutes = express.Router();
// Danh sách like_res
foodRoutes.get("/user/getListUserLike", getListUserLike);
// like nhà hàng
foodRoutes.post("/user/like", addLike);
// unlike nhà hàng
foodRoutes.delete("/user/unLike", unLike)
// Danh sách like theo nhà hàng
foodRoutes.get("/getListLikeByRes/:resid", getListLikeByRes);
// Danh sách like theo users
foodRoutes.get("/getListLikeByUser/:userid", getListLikeByUser);
// Thêm đánh giá
foodRoutes.post("/createNewRate", creatNewRate);
// Danh sách đánh giá theo nhà hàng
foodRoutes.get("/getListRateByRes/:resid", getListRateByRes);
// Danh sách đánh giá theo user
foodRoutes.get("/getListRateByUser/:userid", getListRateByUser);
// order
foodRoutes.get("/listOrders", listOrders)
foodRoutes.post("/orders", order)
export default foodRoutes;
