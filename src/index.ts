import "dotenv/config";
import axios from "axios";
import express from "express";
import { router } from "./app/routes";
import appData from "./app/data/app-data";
import UserService from "./app/service/UserService";
import { userGetAllAndUpdateKey } from "./config/queue-config";
import queue from "./queue";
import UserModel from "./app/model/UserModel";
import createQueueUi from "./queue/create-queue-ui";

const PORT = 5000;
const app = express();
app.use(express.json());
const routerQueueUi = createQueueUi(router);
app.use(routerQueueUi);

const init = async () => {
  console.log("\n\nSimulando\n\n");
  const service = new UserService();
  const fromApi = await axios.get(userGetAllAndUpdateKey.apiUrl);
  const listFromApi: UserModel[] = fromApi.data as UserModel[];
  await service.saveAll(listFromApi);
  console.log("\n\nSimulando\n\n");
};

setTimeout(() => {
  app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
  appData
    .initialize()
    .then(() => console.log("AppData initilized"))
    .catch((err) => console.error("Error during Data initialization", err));
  setTimeout(() => {
    queue.process();
    queue.addAllJobList();
  }, 1000);
}, 10000);
