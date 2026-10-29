# Your first task

## 1. Create the configuration directory

schrun looks for task files in `~/.config/schrun/`:

```sh
mkdir -p ~/.config/schrun
```

## 2. Define a task

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

All five fields are required. See [Task configuration](/reference/task-config) for their types and meaning.

## 3. Run it

```sh
schrun --surface hello
```

The command runs in the foreground, using the current terminal's input and output. To start it detached instead, run `schrun --background hello`.

## 4. Inspect configured tasks

```sh
schrun list
```
