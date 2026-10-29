# Introduction

`schrun` is a small task runner. It reads task definitions from JSON files and can run them immediately or schedule enabled tasks with cron expressions.

## How it works

1. Save a task definition as `~/.config/schrun/<name>.json`.
2. Run it in the foreground or detached in the background.
3. Start the scheduler to run enabled tasks on their cron schedules.

The task name is the filename without `.json`. See [Task configuration](/reference/task-config) for the complete schema.

## Choose a mode

- **Foreground:** `schrun --surface hello` — inherit terminal input/output and wait for the command.
- **Background:** `schrun --background hello` — start detached, ignoring terminal input/output.
- **Scheduled:** `schrun run --start` — start the scheduler for enabled task files.
