---
layout: home
hero:
  name: schrun
  text: Small tasks. Right on time.
  tagline: A lightweight task runner that launches commands from simple JSON files.
  actions:
    - theme: brand
      text: Get started
      link: /guide/installation
    - theme: alt
      text: Read the guide
      link: /guide/
features:
  - title: Simple task files
    details: Define a command and its schedule in a small, readable JSON file.
  - title: Run it your way
    details: Run tasks in the foreground, detach them in the background, or schedule enabled tasks.
  - title: No shell surprises
    details: Commands are launched directly, making execution behavior explicit and predictable.
---

## A task in seconds

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

Then run it:

```sh
schrun --surface hello
```

[Install schrun](/guide/installation) · [Configure your first task](/guide/first-task)
