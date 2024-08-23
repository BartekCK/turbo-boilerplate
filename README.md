# Turbo Boilerplate Repository

Welcome to the Turbo Boilerplate Repository. This repository serves as a boilerplate for turbo usage, containing a set of packages and applications to get you up and running quickly with your project.

## Packages

The repository contains the following packages:

- `@packages/eslint-config-common`: This package includes a set of shared ESLint configuration rules.
- `@packages/prettier-common`: This package consists of common Prettier formatting rules.
- `@packages/test-common`: It includes common test configuration and helpers for your applications.
- `@packages/tsconfig`: This package includes shared TypeScript configuration settings.

## Applications

Currently, we have two applications in the repository:

- `@apps/express-api`: This is an Express.js application. It also includes a shared folder, which can be imported and used in other parts of your project.
- `@apps/nest-api`: This is a Nest.js application, which also uses shared data transfer objects (DTOs) from the Express API application.

## Libs

The repository also includes a `libs` folder, which contains shared libraries that can be used across different parts of your project. The main difference between packages and libs is that libs have to be transpiled before they can be used, while packages can be used directly. Packages are typically used for configuration and shared settings, while libs are used for shared code.
- `@libs/uuid`: This is a library that generates a random UUID v4.

## Key Features

- **Monorepo setup:** The repository utilizes the monorepo setup, offering an organized structure for your applications and shared code. It helps to centralize the configuration and ensure consistency across multiple packages.

- **Task management with Turbo:** Turbo is used for task execution, which aids in efficient task management across multiple packages within the project.

- **TypeScript:** TypeScript is used as the main language for the project.

- **Express and Nest.js apps:** This boilerplate comes with Express and Nest.js applications pre-configured, offering a choice between two of the most popular Node.js frameworks.

- **Pre-configured ESLint and Prettier:** ESLint and Prettier are already set up, ensuring consistent code style and automatic formatting across the project.

- **Jest for Testing:** The boilerplate includes a testing setup using Jest, ready to write and run your tests.

- **Environment Variable Management:** dotenv is used for managing environment variables, ensuring easy configuration across different environments (development, staging, production).

## Running the Applications

The `package.json` file at the root of the repository contains several useful scripts:

`"cache:clean"`: Cleans the Turbo cache and removes the `.turbo` directory.
`"install:clean"`: Cleans the node modules by removing the `node_modules` directory.

`"start:dev:watch"`: Watches all applications in development mode and restarts them on changes.
`"start:dev:watch:nest"`: Watches the Nest.js application in development mode and restarts it on changes.
`"start:dev:watch:express"`: Watches the Express.js application in development mode and restarts it on changes.

`"lint"`: Lints all the applications and packages with ESLint.

`"build"`: Builds all the applications and packages.
`"build:dev:watch"`: Watches all the applications and packages and rebuilds them if there are changes.
`"build:clean"`: Cleans the build artifacts by removing the `dist` directory.

`"test"`: Runs tests for all applications and packages.

`"update"`: Updates all the dependencies of the repository.


## Repository

You can clone this repository using git:

```sh
git clone https://github.com/BartekCK/turbo-boilerplate.git
```

After cloning, you can install all the dependencies:

```sh
cd turbo-boilerplate
npm install
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any questions or suggestions.

## License

This project is licensed under the MIT License.

---

This project is designed to serve as a starting point for turbo-based projects, providing a collection of useful configurations and helpers. I hope it will be beneficial to your work. Please don't hesitate to reach out if you have any issues or suggestions!
