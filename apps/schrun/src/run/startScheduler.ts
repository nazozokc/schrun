import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { PID_FILE } from "../constant/app.ts";
import { consola } from "consola";

export const startSchedule = async (): Promise<void> => {
  try {
    const daemonPath = fileURLToPath(new URL("./daemon.mjs", import.meta.url));

    const child = spawn(process.execPath, [daemonPath], {
      detached: true,
      stdio: "ignore",
    });

    if (child.pid === undefined) {
      new Error("Failed to start daemon");
    }

    child.on("error", (error) => {
      new Error("Failed to start daemon:", error);
    });

    await writeFile(PID_FILE, String(child.pid), "utf-8");
    child.unref();

    consola.success("Success start scheduler");
  } catch (error) {
    consola.error("Error start schedule\n", error);
    return;
  }
};
