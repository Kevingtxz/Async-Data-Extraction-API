export default interface JobInterface {
  key: string;
  options: JobOptsInterface;
  handle: (obj?) => Promise<void>;
}

export type JobOptsInterface = {
  attempts?: number;
  repeat: RepeatOptsInterface;
};

export type RepeatOptsInterface = {
  cron?: string; // Cron string
  tz?: string; // Timezone
  startDate?: Date | string | number; // Start date when the repeat job should start repeating (only with cron).
  endDate?: Date | string | number; // End date when the repeat job should stop repeating.
  limit?: number; // Number of times the job should repeat at max.
  every?: number; // Repeat every millis (cron setting cannot be used together with this setting.)
  count?: number; // The start value for the repeat iteration count.
  readonly key: string; // The key for the repeatable job metadata in Redis.
};
