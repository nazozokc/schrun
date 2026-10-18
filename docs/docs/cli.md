# CLI reference

Run commands from the repository root with Bun:

```sh
bun run apps/schrun/src/index.ts <options>
```

## Execute a task

`--surface <name>` runs the task in the foreground, inherits standard input/output, and waits for completion:

```sh
bun run apps/schrun/src/index.ts --surface hello
```

`--background <name>` starts a detached process with standard input/output ignored and returns after launch:

```sh
bun run apps/schrun/src/index.ts --background hello
```

In both cases, `<name>` is the task filename without `.json`.

## Scheduler

The `run` subcommand starts or stops the scheduler:

```sh
bun run apps/schrun/src/index.ts run --start
bun run apps/schrun/src/index.ts run --stop
```

The scheduler reads task JSON files from `~/.config/schrun`, schedules tasks whose `enabled` value is `true` using their `cron` expressions, and stores its PID at `~/.config/schrun/pid.json`.
