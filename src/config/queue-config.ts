import JobConfigInterface from "../queue/interface/JobConfigInterface";

const productGetAllAndUpdateKey: JobConfigInterface = {
  key: process.env.PRODUCT_GET_ALL_AND_UPDATE_KEY,
  apiUrl: process.env.PRODUCT_API,
  attempts: Number.parseInt(process.env.PRODUCT_ATTEMPTS),
  hoursToRepeat: Number.parseInt(process.env.PRODUCT_HOURS_TO_REPEAT),
};
const userGetAllAndUpdateKey: JobConfigInterface = {
  key: process.env.USER_GET_ALL_AND_UPDATE_KEY,
  apiUrl: process.env.USER_API,
  attempts: Number.parseInt(process.env.USER_ATTEMPTS),
  hoursToRepeat: Number.parseInt(process.env.USER_HOURS_TO_REPEAT),
};

export { productGetAllAndUpdateKey, userGetAllAndUpdateKey };
