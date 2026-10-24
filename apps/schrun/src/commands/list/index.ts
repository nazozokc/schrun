import type { Command } from "gunshi";
import { list } from "../../table.ts";

export const listCommand: Command = {
  name: "list",
  run: list,
};
