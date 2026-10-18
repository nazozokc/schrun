import { readFile, unlink } from "node:fs/promises";
import { PID_FILE } from "../constant/app.ts";
import { consola } from "consola";

export const stopSchedule = async (): Promise<void> => {
  let pid: number;

  try {
    pid = Number(await readFile(PID_FILE, "utf-8"));
  } catch (error) {
    consola.warn("No look schedule pid file");
    return;
  }

  if (!Number.isSafeInteger(pid) || pid <= 0) {
    consola.error("Unsafe pid files");
    return;
  }

  try {
    process.kill(pid, "SIGINT");
    consola.success("Success Send stop scheduler");
  } catch (error) {
    consola.error("Failed Send stop scheduler", error);
    return;
  }

  await unlink(PID_FILE).catch(() => {});
};
