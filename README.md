# Markdown Blog :100:

## Setting up project

- basic `package.json`

```
npm init -y
```

- install dependencies

```
npm i express mongoose ejs
npm i --save-dev nodemon
```

- `add nodemon to scripts` : to use this run: npm run devStart when `server.js` is created

```
"scripts": {
    "devStart": "nodemon server.js",
},
```

- `set up express in /server.js and create index route`

```
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(5000);
```

- `print HTML with server with ejs`: vies wrtitten with ejs, view engine convers EJS to HTML code

```
const app = express();

app.set('view engine', 'ejs')
```

- `create views/index.ejs`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
</head>

<body>
    <h1>This is html</h1>
</body>

</html>
```

```
//server.js
app.get("/", (req, res) => {
  // res.send("Hello world")
  res.render("index");
});
```

- `create routes/articles.js`
