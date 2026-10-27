import { z } from "zod";

export type FileType = {
  description: string;
  cron: string;
  run: string;
  enabled: boolean;
};
