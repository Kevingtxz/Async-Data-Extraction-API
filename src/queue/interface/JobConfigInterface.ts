export default interface JobConfigInterface {
  key: string;
  apiUrl: string;
  attempts: number;
  hoursToRepeat: number;
}
