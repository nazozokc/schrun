import { readdir } from "node:fs/promises";
import { CONFIG_DIR } from "../constant/app";
import { readJSON } from "../readJSON";
import { spawn } from "node:child_process";
import cron from "node-cron";
import { consola } from "consola";

export const startschedule = async (): Promise<void> => {
  const readScheduleJSON = await readdir(CONFIG_DIR);

  for (const readSchedule of readScheduleJSON) {
    if (readSchedule.endsWith(".json")) continue;
    if (readSchedule.match("pid.json")) continue;

    const [filenamesplit] = readSchedule.split(".");
    const fileread = await readJSON(filenamesplit!);

    const [commands, ...args] = fileread.run.split(/\+s/);

    if (!commands) continue;

    cron.schedule(fileread.cron, () => {
      spawn(commands, args, {
        stdio: "ignore",
        detached: true,
      });
    });
  }
};

startschedule().catch((error) => {
  consola.error("Do not runnning daemon\n", error);
  process.exitCode = 1;
});
