import type { Command } from "gunshi";
import { startSchedule } from "../../run/startScheduler.ts";
import { stopSchedule } from "../../run/stopScheduler.ts";

export const runCommand: Command = {
  name: "run",
  args: {
    start: {
      type: "boolean",
      required: false,
      description: "Start scheduler",
    },
    stop: {
      type: "boolean",
      required: false,
      description: "Stop scheduler",
    },
  },

  run: (ctx) => {
    const { start, stop } = ctx.values;

    if (start == true) {
      startSchedule();
    }

    if (stop == true) {
      stopSchedule();
    }
  },
};
