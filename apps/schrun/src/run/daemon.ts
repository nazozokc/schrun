import { readdir } from "node:fs/promises";
import { CONFIG_DIR } from "../constant/app";
import { readJSON } from "../readJSON";
import { spawn } from "node:child_process";
import cron from "node-cron";
import { consola } from "consola";

export const startschedule = async (): Promise<void> => {
  const readScheduleJSON = await readdir(CONFIG_DIR, "utf-8");

  for (const readSchedule of readScheduleJSON) {
    if (!readSchedule.endsWith(".json")) continue;
    if (readSchedule.match("pid.json")) continue;

    const [filenamesplit] = readSchedule.split(".");
    const fileread = await readJSON(filenamesplit!);

    if (!fileread.enabled) continue;

    const [command, ...args] = fileread.run.trim().split(/\+s/);

    if (!command) continue;

    cron.schedule(fileread.cron, () => {
      const cronspawn = spawn(command, args, {
        stdio: "inherit",
        detached: true,
      });

      cronspawn.on("error", (error) => {
        consola.error(`コマンドの起動に失敗: ${command}`, error);
      });
    });
  }
};

await startschedule().catch((error) => {
  consola.error("Do not runnning daemon\n", error);
  process.exitCode = 1;
});
