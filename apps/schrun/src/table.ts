import Table from "cli-table3";
import { readdir } from "node:fs/promises";
import { CONFIG_DIR } from "./constant/app";
import { readJSON } from "./readJSON";
import { consola } from "consola";

export const list = async (): Promise<void> => {
  const read = await readdir(CONFIG_DIR);

  if (read.length === 0) {
    consola.error("No schedule found");
  }
  const table = new Table({
    head: ["description", "cron", "run", "enabled"],
  });

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
