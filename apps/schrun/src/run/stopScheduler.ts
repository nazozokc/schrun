import { readFile, unlink } from "node:fs/promises";
import { PID_FILE } from "../constant/app.ts";
import { consola } from "consola";

export const stopSchedule = async (): Promise<void> => {
  let pid: number;

  try {
    pid = Number(await readFile(PID_FILE, "utf-8"));
  } catch (error) {
    consola.warn("No Look Schedule Pid File");
    return;
  }

  if (!Number.isSafeInteger(pid) || pid <= 0) {
    consola.error("Unsafe pid files");
    return;
  }

  try {
    process.kill(pid, "SIGINT");
    consola.success("Failed Send Stop Scheduler");
  } catch (error) {
    consola.error("Failed Send Stop Scheduler\n", error);
    return;
  }

  await unlink(PID_FILE).catch(() => {});
};
