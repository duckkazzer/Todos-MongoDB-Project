const { Router } = require(`express`);
const router = Router();
const Todo = require(`../models/Todo`);
const User = require(`../models/user`);

router.get("/", async (req, res) => {
  const users = await User.find({}).populate("todo").lean();
  res.status(200).render(`index`, {
    title: "Todos List",
    isIndex: true,
    users,
  });
});

router.get("/create", (req, res) => {
  res.render(`create`, {
    title: "Create Todo",
    isCreate: true,
  });
});

router.post("/create", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  try {
    const user = await User.findOneAndUpdate(
      { username: req.body.username },
      { $addToSet: { todo: todo } },
      {
        new: true,
        upsert: true,
      }
    );

    await user.save();
    await todo.save();
    res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/complete", async (req, res) => {
  const todo = await Todo.findById(req.body.id);
  todo.completed = !!req.body.completed;
  await todo.save();
  res.redirect(`/`);
});

router.get("*", (req, res) => {
  res.status(404).send(`<h1>Eror 404!Page not Founded.</h1>`);
});

module.exports = router;
