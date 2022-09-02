import axios from "axios";
import UserModel from "../../app/model/UserModel";
import UserService from "../../app/service/UserService";
import { HOUR_TO_MILLISECONDS } from "../../util/constants-util";
import { userGetAllAndUpdateKey } from "../../config/queue-config";
import JobInterface, { RepeatOptsInterface } from "../interface/JobInterface";
import JobConfigInterface from "../interface/JobConfigInterface";

const jobConfig: JobConfigInterface = userGetAllAndUpdateKey;
const job: JobInterface = {
  key: jobConfig.key,
  options: {
    attempts: jobConfig.attempts,
    repeat: {
      every: HOUR_TO_MILLISECONDS * jobConfig.hoursToRepeat,
    } as RepeatOptsInterface,
  },
  async handle(): Promise<void> {
    const service = new UserService();
    const fromApi = await axios.get(jobConfig.apiUrl);
    const listFromApi: UserModel[] = fromApi.data as UserModel[];
    await service.saveAll(listFromApi);
  },
};

export default job;
