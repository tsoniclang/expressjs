const app = express.create();
const router = express.Router();

router.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api", router);
