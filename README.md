# vscode-repro-typescript-error

- `pnpm tsc` works fines in Typescript 4.x
- Vscode reports an error.

```
Unable to resolve signature of parameter decorator when called as an expression.
  Argument of type 'undefined' is not assignable to parameter of type 'string | symbol'.ts(1239)
```

- `pnpm tsc` reports the same error as VSCODE for Typescript 5.x.

note: only happens in strict mode.