import Table from "cli-table3";
import { readdir } from "node:fs/promises";
import { CONFIG_DIR } from "./constant/app";
import { readJSON } from "./readJSON";

export const list = async (): Promise<void> => {
  const table = new Table({
    head: ["description", "cron", "run", "enabled"],
  });

  const read = await readdir(CONFIG_DIR);

  for (const readdir of read) {
    if (readdir.match("pid.json")) continue;
    const [splits] = readdir.split(".");
    const readfunc = await readJSON(splits!);

    table.push([
      readfunc.description,
      readfunc.cron,
      readfunc.run,
      readfunc.enabled,
    ]);
  }

  console.log(table.toString());
};
