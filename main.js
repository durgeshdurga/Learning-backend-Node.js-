const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("Middleware chala");
//   next();
// });
//yeh ek middleware add kiya hu taki server se aanevali data (jo readable nai hai) ko readable bana sku..
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is Home page!!");
});

app.get("/about", (req, res, next) => {
  res.send("This is about page!!");
});
//Error handling ko hamesha last routes k baad hi likhana hai..
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!!");
// });

app.listen(3000, () => {
  console.log("Server started...");
});
