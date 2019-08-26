# eslint configuration

hey there! 👋 this is my personal eslint configuration, feel free to use at any project
or copy this repo settings to setup your own config and publish it to your favorite package registry!

## installation

```bash
yarn add -D lucasecdb/eslint-config
```

> Follow [this guide](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry) to setup the integration with the GitHub package registry

create a `.eslintrc` file at the root of your project if you didn't already,
alongside the `node_modules` folder, and extend this config like this:

```json
{
  "extends": "@lucasecdb",
  "env": {
    "es6": true
  }
}
```
