import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
const model = initModels(sequelize);
const getListUserLike = async (req, res) => {
  let data = await model.like_res.findAll({});
  res.status(200).send(data);
  res.status(404).send("Not found");
  if (data) {
    res.status(200).send(data);
  } else res.status(404).send("Not found");
};
const addLike = async (req, res) => {
  let user_id = req.body.user_id;
  let res_id = req.body.res_id;
  let date_like = req.body.date_like;
  let data = await model.like_res.create({ user_id, res_id, date_like });
  res.status(201).send(data);
};
const unLike = async (req, res) => {
  let user_id = req.body.user_id;
  let res_id = req.body.res_id;
  let data = await model.like_res.destroy({
    where: { user_id, res_id },
  });
  res.send(data);
};
const getListLikeByRes = async (req, res) => {
  let { resid } = req.params;
  let data = await model.like_res.findAll({
    attributes: ["user_id", "date_like"],
    where: {
      res_id: resid,
    },
  });
  if (data) {
    res.status(200).send(data);
  } else res.status(404).send("Not found");
};
const getListLikeByUser = async (req, res) => {
  let { userid } = req.params;
  let data = await model.like_res.findAll({
    attributes: ["res_id", "date_like"],
    where: {
      user_id: userid,
    },
  });
  if (data) {
    res.status(200).send(data);
  } else res.status(404).send("Not found");
};
const creatNewRate = async (req, res) => {
  let user_id = req.body.user_id;
  let res_id = req.body.res_id;
  let amount = req.body.amount;
  let date_rate = req.body.date_rate;
  let data = await model.rate_res.create({
    user_id,
    res_id,
    amount,
    date_rate,
  });
  res.status(201).send(data);
};
const getListRateByRes = async (req, res) => {
  let { resid } = req.params;
  let data = await model.rate_res.findAll({
    attributes: ["user_id", "date_rate"],
    where: {
      res_id: resid,
    },
  });
  if (data) {
    res.status(200).send(data);
  } else res.status(404).send("Not found");
};
const getListRateByUser = async (req, res) => {
  let { userid } = req.params;
  let data = await model.rate_res.findAll({
    attributes: ["res_id", "date_rate"],
    where: {
      user_id: userid,
    },
  });
  if (data) {
    res.status(200).send(data);
  } else res.status(404).send("Not found");
};
const listOrders = async (req, res) => {
  let data = await model.orders.findAll({});
  if (data) {
    res.status(200).send(data);
  } else res.status(404).send("Not found");
};
const order = async (req, res) => {
  let user_id = req.body.user_id;
  let food_id = req.body.food_id;
  let amount = req.body.amount;
  let code = req.body.code;
  let arr_sub_id = req.body.arr_sub_id;
  let data = await model.orders.create({
    user_id,
    food_id,
    amount,
    code,
    arr_sub_id,
  });
  res.status(201).send(data);
};
export {
  addLike,
  getListUserLike,
  getListLikeByRes,
  getListLikeByUser,
  creatNewRate,
  unLike,
  getListRateByRes,
  getListRateByUser,
  order,
  listOrders,
};
