# Generated Files

## FIle tree

Every file generated by Simp can be found under

```bash
.simp
├── config
│   └── simp.default.config.js
├── hooks
│   ├── cjs
│   │   └── simp.test.hook.js
│   └── src
│       └── simp.test.hook.ts
└── logs

```

## Config files

You can store your config files in .simp/config
and import them in .simp.config.js

## Hooks

Hooks are automaticaly generated according to your config.
and stored in .simp/hooks/src/\*.ts

You can edit your own custom hook in Typescript and place it under .simp/hooks/src

## Logs

Every log is printed with tslog in stdout while triggering a pipeline.
And it is saved under the log folder under
.simp/logs/