import Queue from "bull";
import redisConfig from "../config/redis-config";
import jobList from "./job";

export const queueList = jobList.map((job) => ({
  bull: new Queue(job.key, { redis: redisConfig }),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

const queue = {
  queueList,
  add(name) {
    const queue = this.queueList.find((item) => item.name === name);
    return queue.bull.add(queue.options);
  },
  addAllJobList() {
    jobList.forEach((item) => {
      const queue = this.queueList.find((queue) => queue.name === item.key);
      queue.bull.add(queue.options);
    });
  },
  process() {
    return this.queueList.forEach((item) => {
      console.log(`\n---Adding Key: ${item.name} to Queue---\n`);
      item.bull.process(item.handle);
      item.bull.on("failed", (job, err) => {
        console.log(`Job failed - ${item.name}, ${job.data}`);
        console.error(err);
      });
    });
  },
};

export default queue;
