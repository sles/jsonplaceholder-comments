- [Test app](#test-app)
- [Developing](#developing)
- [File structure](#file-structure)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)

# Test app

CRA application

Main technologies - React, Redux (redux-saga), Typescript, Material-UI.

## Developing

1. Install dependencies - run `npm install` from _root_ dir:
   ```sh
   npm install
   ```
2. Start development server:
   ```sh
   npm run start
   ```
3. Build app:
   ```sh
   npm run build
   ```

## File structure


```
./
├── src/
│   ├── api/
│   ├── assets/
│   ├── shared/ - shared components
│   ├── features/ - files divided by feature (e.g. auth, home, profile...)
|   │   ├── ...
|   │   └── {feature}
|   │       ├── (redux/)?
|   |       |   ├── actions.ts
|   |       |   ├── types.ts
|   |       |   ├── saga.ts
|   |       |   ├── reducer.ts
|   |       |   └── ... 
|   │       ├── (components/)?
|   │       ├── (api/)?
|   │       ├── (hooks/)?
|   │       ├── (ts/)?
|   │       ├── (utils/)?
|   │       └── ... 
│   ├── constants/
│   ├── ts-types/ - all shared typescript types
│   ├── utils/
│   └── ...
├── package/ - Other packages
├── ... - _other configuration files_.
├── package.json
├── README.md
└── package-lock.json
```

The root of project contains common configuration file like _.gitignore_, _.eslintrc.json_.

## Scripts

| Script                       | Description                       |
| -----------------------------| ----------------------------------|
| `start`                      | start server in development mode  |
| `build`                      | build app                         |
| `test`                       | run tests                         |
| `eject`                      | eject webpack from cra            |
| `type-check`                 | run typescript types checking     |
| `format`                     | run prettier                      |
| `lint`                       | run eslint                        |


## Environment variables

| VAR                        | Description                 |
| ---------------------------| --------------------------- |
| `REACT_APP_API_URL`        | API url                     |
