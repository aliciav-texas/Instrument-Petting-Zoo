const app = require("./routers.js");
const port = 3000;

app.listen(port, () => {
  console.log(`listening at localhost:${port}`);
});
