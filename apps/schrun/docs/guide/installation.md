# Installation

## Requirements

Install [Bun](https://bun.sh/), which provides the runtime used by schrun.

## Run from this repository

Clone the repository, install dependencies, then invoke the CLI from the `apps/schrun` package:

```sh
bun install
cd apps/schrun
bun run src/index.ts --surface hello
```

The package is configured as a `schrun` executable when installed or linked. Until a published package is available, use Bun to run the source entry point as shown above.

## Build the package

```sh
cd apps/schrun
bun run build
```

The compiled CLI is written to `dist/index.mjs`.
