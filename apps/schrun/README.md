# schrun

`schrun` is a small task runner. It reads task definitions from JSON files and can run them in the foreground, start them in the background, or schedule enabled tasks with cron expressions.

## Requirements

- [Bun](https://bun.sh/)

## Install and run from this repository

```sh
bun install
```

Until a published package is available, run the CLI from the repository root with Bun:

```sh
bun run apps/schrun/src/index.ts --surface hello
bun run apps/schrun/src/index.ts --background hello
```

The task name is passed without the `.json` extension. schrun reads `~/.config/schrun/<name>.json`.

## Define a task

Create `~/.config/schrun/hello.json`:

```json
{
  "id": 1,
  "description": "Print a greeting",
  "cron": "* * * * *",
  "run": "echo hello",
  "enabled": true
}
```

Every field is required: `id` (number), `description` (string), `cron` (cron expression string), `run` (command string), and `enabled` (boolean). The scheduler considers only enabled tasks.

## Run tasks

Foreground mode inherits standard input/output and waits for the command to finish:

```sh
bun run apps/schrun/src/index.ts --surface hello
```

Detached background mode ignores standard input/output and returns after starting the process:

```sh
bun run apps/schrun/src/index.ts --background hello
```

Start or stop the scheduler:

```sh
bun run apps/schrun/src/index.ts run --start
bun run apps/schrun/src/index.ts run --stop
```

## Limitations

Commands are split on whitespace and launched directly, without a shell. Pipes, redirects, variable expansion, and quoted arguments are not interpreted. Use a script file when a task needs shell features.
