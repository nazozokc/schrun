# Limitations

## Commands are not interpreted by a shell

schrun splits the `run` string on whitespace and launches the executable directly. It does not interpret shell syntax, including:

- Pipes (`|`) or redirects (`>`, `<`)
- Environment-variable expansion
- Quoted arguments containing spaces
- Shell operators such as `&&`

For commands that need shell features, put the logic in a script and configure schrun to run that script. Keep arguments whitespace-free when using the current command format.
