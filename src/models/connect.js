import { Sequelize } from "sequelize";
const sequelize = new Sequelize("bai1", "root", "1234", {
  port: 3307,
  dialect: "mysql",
  host: "localhost",
});
export default sequelize;