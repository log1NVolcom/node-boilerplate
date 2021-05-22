### Scripts

#### `yarn run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `yarn run start`

Starts the app in production by first building the project with `yarn run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `yarn run build`

Builds the app at `build`, cleaning the folder first.

#### `yarn run test`

Runs the `jest` tests once.

#### `yarn run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `yarn run prettier-format`

Format your code.

#### `yarn run prettier-watch`

Format your code in watch mode, waiting for file changes.
