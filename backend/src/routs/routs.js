const Router = require("koa-router");
const { modalData, foodsData, mainPage } = require("../controllers/foodData");

const isAuthenticatedUser = require("../middleware/isAuthenticatedUser");
const controllers = require("../controllers/auth");
const withoutReg = require("../controllers/withoutReg");

const addOrder = require("../controllers/addOrder");

// eslint-disable-next-line new-cap
const controller = new controllers();
const router = new Router();
router.get("/", mainPage);
router.get("/data", foodsData);
router.get("/modalData", modalData);

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.post("/without-reg", withoutReg);
router.post("/addOrder", isAuthenticatedUser, addOrder);

module.exports = router;
