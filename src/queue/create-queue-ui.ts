import { Router } from "express";
import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { queueList } from ".";

export default function createQueueUi(router: Router) {
  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath("/admin/queues");
  router.use("/admin/queues", serverAdapter.getRouter());
  createBullBoard({
    queues: queueList.map((item) => new BullAdapter(item.bull)),
    serverAdapter,
  });
  return router;
}
