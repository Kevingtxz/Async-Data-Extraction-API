import axios from "axios";
import ProductModel from "../../app/model/ProductModel";
import ProductService from "../../app/service/ProductService";
import { HOUR_TO_MILLISECONDS } from "../../util/constants-util";
import { productGetAllAndUpdateKey } from "../../config/queue-config";
import JobInterface, { RepeatOptsInterface } from "../interface/JobInterface";
import JobConfigInterface from "../interface/JobConfigInterface";

const jobConfig: JobConfigInterface = productGetAllAndUpdateKey;
const job: JobInterface = {
  key: jobConfig.key,
  options: {
    attempts: jobConfig.attempts,
    repeat: {
      every: HOUR_TO_MILLISECONDS * jobConfig.hoursToRepeat,
    } as RepeatOptsInterface,
  },
  async handle(): Promise<void> {
    const service = new ProductService();
    const fromApi = await axios.get(jobConfig.apiUrl);
    const listFromApi: ProductModel[] = fromApi.data as ProductModel[];
    await service.saveAll(listFromApi);
  },
};

export default job;
