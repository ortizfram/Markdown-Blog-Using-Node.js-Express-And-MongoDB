const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  // res.send("Hello world")
  const articles = [
    {
      title: "Test Article",
      createdAt: Date.now(),
      description: "Test description...",
    },
    {
      title: "Test Article 2",
      createdAt: Date.now(),
      description: "Test description...",
    },
  ];
  res.render("index", { articles: articles });
});

app.listen(5000);
