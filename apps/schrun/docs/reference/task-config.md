# Task configuration

Create one JSON file per task under `~/.config/schrun/`. The filename (without `.json`) is the task name used by the CLI.

```json
{
  "id": 1,
  "description": "Print a greeting",
  "cron": "* * * * *",
  "run": "echo hello",
  "enabled": true
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | number | Yes | Numeric task identifier. |
| `description` | string | Yes | Human-readable task description. |
| `cron` | string | Yes | Cron expression used by the scheduler. |
| `run` | string | Yes | Executable and its whitespace-separated arguments. |
| `enabled` | boolean | Yes | Whether the scheduler should run this task. |

The configuration is validated before execution. All fields must be present with the specified types.
