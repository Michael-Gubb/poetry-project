import { app } from "./app";
import appSetup from "./app.setup";

const port = process.env.PORT || 3333;

appSetup()
  .then(() => listenToPort())
  .catch(() => console.error("Error on setup"));

function listenToPort() {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
