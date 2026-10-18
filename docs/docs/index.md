# schrun

schrun runs commands described by JSON task files. Run a task interactively, launch it detached, or use the scheduler to run enabled tasks on cron schedules.

## Quick start

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

From the repository root, run it in the foreground:

```sh
bun run apps/schrun/src/index.ts --surface hello
```

Task names omit the `.json` suffix. See [Task files](tasks.md) and [CLI reference](cli.md) for details.

## Requirements

The project uses [Bun](https://bun.sh/). Install workspace dependencies from the repository root with `bun install`.
