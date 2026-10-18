# Task files

schrun loads task definitions from `~/.config/schrun/<name>.json`. Create the directory if necessary:

```sh
mkdir -p ~/.config/schrun
```

Pass `<name>` to the CLI without `.json`; for example, `hello` loads `~/.config/schrun/hello.json`.

## Schema

All properties are required:

| Property | Type | Description |
| --- | --- | --- |
| `id` | number | Task identifier. |
| `description` | string | Human-readable task description. |
| `cron` | string | Cron expression used by the scheduler. |
| `run` | string | Executable and arguments, separated by whitespace. |
| `enabled` | boolean | Whether the scheduler should schedule this task. |

Example:

```json
{
  "id": 1,
  "description": "Print a greeting",
  "cron": "* * * * *",
  "run": "echo hello",
  "enabled": true
}
```

The command is split on whitespace and spawned directly, not interpreted by a shell. Quotes, pipes, redirects, and variable expansion therefore do not work as shell syntax. Put complex commands in a script and invoke that script instead.
