# CLI reference

## Run a task in the foreground

```sh
schrun --surface <task-name>
```

Inherits standard input/output. The task name is the JSON filename without its extension.

## Run a task in the background

```sh
schrun --background <task-name>
```

Starts a detached process with standard input/output ignored.

## List tasks

```sh
schrun list
```

Lists task descriptions, cron expressions, commands, and enabled states.

## Control the scheduler

```sh
schrun run --start
schrun run --stop
```

The scheduler runs enabled task definitions from the configuration directory.

## Version

```sh
schrun --version
```
