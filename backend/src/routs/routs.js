const Router = require("koa-router");
const { modalData, foodsData, mainPage } = require("../controllers/foodData");

const { isAuthenticatedUser } = require("../middleware/isAuthenticatedUser");
const { registration, login } = require("../controllers/auth");
const { withoutReg } = require("../controllers/withoutReg");
const addOrder = require("../controllers/addOrder");
const searchProduct = require("../controllers/searchProduct");

// eslint-disable-next-line new-cap
const router = new Router();
router.get("/", mainPage);
router.get("/data", foodsData);
router.get("/modalData", modalData);
router.get("/search", searchProduct);

router.post("/registration", registration);
router.post("/login", login);
router.post("/without-reg", withoutReg);
router.post("/addOrder", isAuthenticatedUser, addOrder);

module.exports = router;
