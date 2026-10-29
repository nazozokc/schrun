# Scheduling tasks

Each task has a `cron` expression and an `enabled` flag. The scheduler only schedules enabled tasks.

Start the scheduler:

```sh
schrun run --start
```

Stop it:

```sh
schrun run --stop
```

Use a cron expression supported by [node-cron](https://github.com/node-cron/node-cron). For example, `* * * * *` runs every minute. Keep the scheduler running for as long as you want scheduled tasks to execute.
