# Zoe

[![CircleCI](https://circleci.com/gh/jorgegonzalez/zoe.svg?style=svg)](https://circleci.com/gh/jorgegonzalez/zoe)
[![Zoe](https://img.shields.io/badge/linter-zoe-615cfd.svg?longCache=true&style=flat&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgxIiB2aWV3Qm94PSIwIDAgNzMgODEiIHdpZHRoPSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIj48cGF0aCBkPSJtMzUuMjIgNGMtNS4wODU2MzQ2IDEuMDU0NDU4NzctOS45MTYxNzE4IDMuMDkyNjYwMS0xNC4yMiA2LTQuMTQ3NTUyMyAyLjc4NDgzNTQtNy43MTkzODQ3IDYuMzQzMDg2Ny0xMC41MiAxMC40OC0yLjczODUyMjgzIDQuMDQ0NjM4Ni00LjY2NzQwMzg1IDguNTgxNTg0MS01LjY4IDEzLjM2LS45Nzk0NTQyOSA0LjYyODM0MjQtMS4wNTc1NDU1OSA5LjQwMjA5NzktLjIzIDE0LjA2LjgyOTY4OTQxIDQuNTI5MzE0NyAyLjUyNzUzMjA4IDguODU1NDE3OCA1IDEyLjc0IDIuMzgwNjUwNyAzLjc1NDUyNzEgNS40NjM3MjYyIDcuMDE0MTY2NCA5LjA4IDkuNiAzLjUwMjgxOTYgMi41MDU1NjEzIDcuNDU5NjY2NiA0LjMwNTY3MTkgMTEuNjUgNS4zIDQuMDMyMjQ0OS45NDMwNjg0IDguMjA4NTc4OCAxLjA5OTI1NjUgMTIuMy40NiAzLjk3MDMxNjYtLjU5Mjk5MjYgNy43ODc2NjQ4LTEuOTUxNDc5NiAxMS4yNC00IDMuMzE2NTMwMi0xLjk5MjAwMDQgNi4yMTY0NTYtNC42MDY2ODc2IDguNTQtNy43IDQuNDU1NjczNC01Ljg4NzI5IDYuNDI2NTk5NC0xMy4yODYzNDA0IDUuNDktMjAuNjEtLjg1MTY3NjMtNi43NTQxNzkzLTQuMzI5MzIyOC0xMi45MDExMzUtOS42OC0xNy4xMS00Ljg5MzczMzUtMy44NjI0NTg2LTExLjExNTU3MzItNS42MzQ0Nzg4LTE3LjMxLTQuOTMgNi4yMDA1NzkyLS42ODIxNDUyIDEyLjQxOTM1MDcgMS4xMTUxODc2IDE3LjMgNSA1LjMyMzAzMTMgNC4yMjk4Mzc2IDguNzYyMDYzMyAxMC4zODkxOTA3IDkuNTcgMTcuMTQuODg1MzY5NSA3LjMwNTc2Ny0xLjEzMjcyIDE0LjY2NzEyNTItNS42MiAyMC41LTIuMzMzMTQ0OCAzLjA2NDc4My01LjI0MDU0MiA1LjY0NjExNzEtOC41NiA3LjYtMy40NDYwMjI4IDIuMDIzNTkxMS03LjI1Mzg3MzQgMy4zNTUxNDk5LTExLjIxIDMuOTItNC4wOTA4NTQ3LjU5NDM1MTctOC4yNTgyNjc0LjM4NzE2OTgtMTIuMjctLjYxLTQuMTUwODc0Mi0xLjAzMDUwNjgtOC4wNjA2NTkxLTIuODYxNDEzOS0xMS41MS01LjM5LTMuNTYwMzc3Ny0yLjYwNTUxNDktNi42OTI2NTE3LTUuNDE1NjgzMi05LjAxLTkuMTciIHRyYW5zZm9ybT0ibWF0cml4KC45OTQ1MjE5IC4xMDQ1Mjg0NiAtLjEwNDUyODQ2IC45OTQ1MjE5IDQuMzk4NzkyIC0zLjU0ODA5OCkiLz48cGF0aCBkPSJtNDEuMjggMzkuNjhjMS41Njk0MDM1LS42NzMwMzMxIDMuMzY2NzIwNC0uNTUwMjM1IDQuODMuMzMgMS45NTQzMzEzIDEuMTA5MzgzIDMuMzIyMDI1MyAzLjAyMTk2MDUgMy43NCA1LjIzLjU0NjYyOSAyLjczODg1ODQtLjA3NzAxNTMgNS41ODE1MTYxLTEuNzIgNy44NC0xLjk1MTcxNjUgMi43MzMwOTItNC45NDMwMDg5IDQuNTQxNjEyMi04LjI3IDUtMy44ODIwMDM4LjU2ODA5OTEtNy44Mjg2MDYzLS40NjAwMzc3LTEwLjk0LTIuODUtMy41NzQ2Mjc1LTIuNzI5MzE1Ni01LjkxMzkxOTgtNi43NzA4OTMtNi41LTExLjIzLS42NzkxODcxLTUuMDM4MzY1NC42ODE1NTc2LTEwLjEzOTM1OCAzLjc4LTE0LjE3IDMuNDI4OTExNy00LjQ5NzM1NTMgOS4xOTIwODA1LTcuNDMzMzc0NSAxNC43OTcxNjk5LTguMTg2MTExOS01LjU2OTkyOC43ODEyMTM1LTExLjI5MDg2NDEgMy43MjI4NjUzLTE0LjY4NzE2OTkgOC4yMDYxMTE5LTMuMDYxNzA5MyA0LjAwNDg0NjEtNC40MDA1MzQ2IDkuMDY1MDI5Ni0zLjcyIDE0LjA2LjU3ODczMzMgNC40MDEzNjM0IDIuODg1MDUwNiA4LjM5MTU0NDIgNi40MSAxMS4wOSAzLjA2NjcyNjUgMi4zNDQ2MDQ5IDYuOTUwNjM0NyAzLjM1MDc0MjcgMTAuNzcgMi43OSAzLjI1Mzc4NzQtLjQ0OTI2MjMgNi4xNzc1ODI2LTIuMjIyMzU2IDguMDgtNC45IDEuNTg5MzMxNi0yLjE5MDc1MjEgMi4xNzc4MjA3LTQuOTUxNTY1NSAxLjYyLTcuNi0uNDA0MTkzNi0yLjEzMDE3My0xLjc0NDI5Ni0zLjk2NTkyOTctMy42NS01LTEuMzkwNTYzLS44MDkyODctMy40OTI4MDg0LS44MDAwOTc2LTQuOTQtLjA5NzA3MDEiIHRyYW5zZm9ybT0ibWF0cml4KC45OTQ1MjE5IC4xMDQ1Mjg0NiAtLjEwNDUyODQ2IC45OTQ1MjE5IDQuMzcyNzE2IC0zLjU1OTUyMikiLz48L2c+PC9zdmc+)](https://github.com/jorgegonzalez/zoe)

- **No configuration necessary**. Just install Zoe and you're ready to go.
- Defaults to **[Prettier](https://github.com/prettier/prettier)** for formatting and style rules.
- Out-of-the-box support for **React**, **TypeScript**, and **Jest**. No need to manually install any additional plugins or configs.
- Fix issues by running `zoe --fix`.
- Includes [eslint-plugin-react-hooks](https://github.com/xjamundx/eslint-plugin-promise), [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn), and [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) for some additional goodies.

## Installation

```
npm install --save-dev zoe
```

`zoe --init` will create an `.eslintrc` that will get you setup. You should be good to go from there.

## Overrides

Zoe uses Prettier's defaults for style and cosmetic rules, and will respect Prettier's various [configuration](https://prettier.io/docs/en/configuration.html) options and files.

Most rules can be overrided normally by adding them to your `.eslintrc#rules`:

```json
{
	"extends": "zoe/typescript",
	"rules": {
		"no-console": "error"
	}
}
```

## Prior Art

Zoe has taken much inspiration from and is heavily influenced by each of the following excellent products:

- [XO](https://github.com/xojs/xo) - ❤️ JavaScript happiness style linter
- [Standard](https://github.com/standard/standard) - 🌟 JavaScript Style Guide, with linter & automatic code fixer
- [Lynt](https://github.com/saadq/lynt) - ✨ A zero config JavaScript linter with support for Typescript, Flow, and React.

## Badge

Add a Zoe badge to your project:

[![Zoe](https://img.shields.io/badge/linter-zoe-615cfd.svg?longCache=true&style=flat&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgxIiB2aWV3Qm94PSIwIDAgNzMgODEiIHdpZHRoPSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIj48cGF0aCBkPSJtMzUuMjIgNGMtNS4wODU2MzQ2IDEuMDU0NDU4NzctOS45MTYxNzE4IDMuMDkyNjYwMS0xNC4yMiA2LTQuMTQ3NTUyMyAyLjc4NDgzNTQtNy43MTkzODQ3IDYuMzQzMDg2Ny0xMC41MiAxMC40OC0yLjczODUyMjgzIDQuMDQ0NjM4Ni00LjY2NzQwMzg1IDguNTgxNTg0MS01LjY4IDEzLjM2LS45Nzk0NTQyOSA0LjYyODM0MjQtMS4wNTc1NDU1OSA5LjQwMjA5NzktLjIzIDE0LjA2LjgyOTY4OTQxIDQuNTI5MzE0NyAyLjUyNzUzMjA4IDguODU1NDE3OCA1IDEyLjc0IDIuMzgwNjUwNyAzLjc1NDUyNzEgNS40NjM3MjYyIDcuMDE0MTY2NCA5LjA4IDkuNiAzLjUwMjgxOTYgMi41MDU1NjEzIDcuNDU5NjY2NiA0LjMwNTY3MTkgMTEuNjUgNS4zIDQuMDMyMjQ0OS45NDMwNjg0IDguMjA4NTc4OCAxLjA5OTI1NjUgMTIuMy40NiAzLjk3MDMxNjYtLjU5Mjk5MjYgNy43ODc2NjQ4LTEuOTUxNDc5NiAxMS4yNC00IDMuMzE2NTMwMi0xLjk5MjAwMDQgNi4yMTY0NTYtNC42MDY2ODc2IDguNTQtNy43IDQuNDU1NjczNC01Ljg4NzI5IDYuNDI2NTk5NC0xMy4yODYzNDA0IDUuNDktMjAuNjEtLjg1MTY3NjMtNi43NTQxNzkzLTQuMzI5MzIyOC0xMi45MDExMzUtOS42OC0xNy4xMS00Ljg5MzczMzUtMy44NjI0NTg2LTExLjExNTU3MzItNS42MzQ0Nzg4LTE3LjMxLTQuOTMgNi4yMDA1NzkyLS42ODIxNDUyIDEyLjQxOTM1MDcgMS4xMTUxODc2IDE3LjMgNSA1LjMyMzAzMTMgNC4yMjk4Mzc2IDguNzYyMDYzMyAxMC4zODkxOTA3IDkuNTcgMTcuMTQuODg1MzY5NSA3LjMwNTc2Ny0xLjEzMjcyIDE0LjY2NzEyNTItNS42MiAyMC41LTIuMzMzMTQ0OCAzLjA2NDc4My01LjI0MDU0MiA1LjY0NjExNzEtOC41NiA3LjYtMy40NDYwMjI4IDIuMDIzNTkxMS03LjI1Mzg3MzQgMy4zNTUxNDk5LTExLjIxIDMuOTItNC4wOTA4NTQ3LjU5NDM1MTctOC4yNTgyNjc0LjM4NzE2OTgtMTIuMjctLjYxLTQuMTUwODc0Mi0xLjAzMDUwNjgtOC4wNjA2NTkxLTIuODYxNDEzOS0xMS41MS01LjM5LTMuNTYwMzc3Ny0yLjYwNTUxNDktNi42OTI2NTE3LTUuNDE1NjgzMi05LjAxLTkuMTciIHRyYW5zZm9ybT0ibWF0cml4KC45OTQ1MjE5IC4xMDQ1Mjg0NiAtLjEwNDUyODQ2IC45OTQ1MjE5IDQuMzk4NzkyIC0zLjU0ODA5OCkiLz48cGF0aCBkPSJtNDEuMjggMzkuNjhjMS41Njk0MDM1LS42NzMwMzMxIDMuMzY2NzIwNC0uNTUwMjM1IDQuODMuMzMgMS45NTQzMzEzIDEuMTA5MzgzIDMuMzIyMDI1MyAzLjAyMTk2MDUgMy43NCA1LjIzLjU0NjYyOSAyLjczODg1ODQtLjA3NzAxNTMgNS41ODE1MTYxLTEuNzIgNy44NC0xLjk1MTcxNjUgMi43MzMwOTItNC45NDMwMDg5IDQuNTQxNjEyMi04LjI3IDUtMy44ODIwMDM4LjU2ODA5OTEtNy44Mjg2MDYzLS40NjAwMzc3LTEwLjk0LTIuODUtMy41NzQ2Mjc1LTIuNzI5MzE1Ni01LjkxMzkxOTgtNi43NzA4OTMtNi41LTExLjIzLS42NzkxODcxLTUuMDM4MzY1NC42ODE1NTc2LTEwLjEzOTM1OCAzLjc4LTE0LjE3IDMuNDI4OTExNy00LjQ5NzM1NTMgOS4xOTIwODA1LTcuNDMzMzc0NSAxNC43OTcxNjk5LTguMTg2MTExOS01LjU2OTkyOC43ODEyMTM1LTExLjI5MDg2NDEgMy43MjI4NjUzLTE0LjY4NzE2OTkgOC4yMDYxMTE5LTMuMDYxNzA5MyA0LjAwNDg0NjEtNC40MDA1MzQ2IDkuMDY1MDI5Ni0zLjcyIDE0LjA2LjU3ODczMzMgNC40MDEzNjM0IDIuODg1MDUwNiA4LjM5MTU0NDIgNi40MSAxMS4wOSAzLjA2NjcyNjUgMi4zNDQ2MDQ5IDYuOTUwNjM0NyAzLjM1MDc0MjcgMTAuNzcgMi43OSAzLjI1Mzc4NzQtLjQ0OTI2MjMgNi4xNzc1ODI2LTIuMjIyMzU2IDguMDgtNC45IDEuNTg5MzMxNi0yLjE5MDc1MjEgMi4xNzc4MjA3LTQuOTUxNTY1NSAxLjYyLTcuNi0uNDA0MTkzNi0yLjEzMDE3My0xLjc0NDI5Ni0zLjk2NTkyOTctMy42NS01LTEuMzkwNTYzLS44MDkyODctMy40OTI4MDg0LS44MDAwOTc2LTQuOTQtLjA5NzA3MDEiIHRyYW5zZm9ybT0ibWF0cml4KC45OTQ1MjE5IC4xMDQ1Mjg0NiAtLjEwNDUyODQ2IC45OTQ1MjE5IDQuMzcyNzE2IC0zLjU1OTUyMikiLz48L2c+PC9zdmc+)](https://github.com/jorgegonzalez/zoe)

```markdown
[![Zoe](https://img.shields.io/badge/linter-zoe-615cfd.svg?longCache=true&style=flat&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgxIiB2aWV3Qm94PSIwIDAgNzMgODEiIHdpZHRoPSI3MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIj48cGF0aCBkPSJtMzUuMjIgNGMtNS4wODU2MzQ2IDEuMDU0NDU4NzctOS45MTYxNzE4IDMuMDkyNjYwMS0xNC4yMiA2LTQuMTQ3NTUyMyAyLjc4NDgzNTQtNy43MTkzODQ3IDYuMzQzMDg2Ny0xMC41MiAxMC40OC0yLjczODUyMjgzIDQuMDQ0NjM4Ni00LjY2NzQwMzg1IDguNTgxNTg0MS01LjY4IDEzLjM2LS45Nzk0NTQyOSA0LjYyODM0MjQtMS4wNTc1NDU1OSA5LjQwMjA5NzktLjIzIDE0LjA2LjgyOTY4OTQxIDQuNTI5MzE0NyAyLjUyNzUzMjA4IDguODU1NDE3OCA1IDEyLjc0IDIuMzgwNjUwNyAzLjc1NDUyNzEgNS40NjM3MjYyIDcuMDE0MTY2NCA5LjA4IDkuNiAzLjUwMjgxOTYgMi41MDU1NjEzIDcuNDU5NjY2NiA0LjMwNTY3MTkgMTEuNjUgNS4zIDQuMDMyMjQ0OS45NDMwNjg0IDguMjA4NTc4OCAxLjA5OTI1NjUgMTIuMy40NiAzLjk3MDMxNjYtLjU5Mjk5MjYgNy43ODc2NjQ4LTEuOTUxNDc5NiAxMS4yNC00IDMuMzE2NTMwMi0xLjk5MjAwMDQgNi4yMTY0NTYtNC42MDY2ODc2IDguNTQtNy43IDQuNDU1NjczNC01Ljg4NzI5IDYuNDI2NTk5NC0xMy4yODYzNDA0IDUuNDktMjAuNjEtLjg1MTY3NjMtNi43NTQxNzkzLTQuMzI5MzIyOC0xMi45MDExMzUtOS42OC0xNy4xMS00Ljg5MzczMzUtMy44NjI0NTg2LTExLjExNTU3MzItNS42MzQ0Nzg4LTE3LjMxLTQuOTMgNi4yMDA1NzkyLS42ODIxNDUyIDEyLjQxOTM1MDcgMS4xMTUxODc2IDE3LjMgNSA1LjMyMzAzMTMgNC4yMjk4Mzc2IDguNzYyMDYzMyAxMC4zODkxOTA3IDkuNTcgMTcuMTQuODg1MzY5NSA3LjMwNTc2Ny0xLjEzMjcyIDE0LjY2NzEyNTItNS42MiAyMC41LTIuMzMzMTQ0OCAzLjA2NDc4My01LjI0MDU0MiA1LjY0NjExNzEtOC41NiA3LjYtMy40NDYwMjI4IDIuMDIzNTkxMS03LjI1Mzg3MzQgMy4zNTUxNDk5LTExLjIxIDMuOTItNC4wOTA4NTQ3LjU5NDM1MTctOC4yNTgyNjc0LjM4NzE2OTgtMTIuMjctLjYxLTQuMTUwODc0Mi0xLjAzMDUwNjgtOC4wNjA2NTkxLTIuODYxNDEzOS0xMS41MS01LjM5LTMuNTYwMzc3Ny0yLjYwNTUxNDktNi42OTI2NTE3LTUuNDE1NjgzMi05LjAxLTkuMTciIHRyYW5zZm9ybT0ibWF0cml4KC45OTQ1MjE5IC4xMDQ1Mjg0NiAtLjEwNDUyODQ2IC45OTQ1MjE5IDQuMzk4NzkyIC0zLjU0ODA5OCkiLz48cGF0aCBkPSJtNDEuMjggMzkuNjhjMS41Njk0MDM1LS42NzMwMzMxIDMuMzY2NzIwNC0uNTUwMjM1IDQuODMuMzMgMS45NTQzMzEzIDEuMTA5MzgzIDMuMzIyMDI1MyAzLjAyMTk2MDUgMy43NCA1LjIzLjU0NjYyOSAyLjczODg1ODQtLjA3NzAxNTMgNS41ODE1MTYxLTEuNzIgNy44NC0xLjk1MTcxNjUgMi43MzMwOTItNC45NDMwMDg5IDQuNTQxNjEyMi04LjI3IDUtMy44ODIwMDM4LjU2ODA5OTEtNy44Mjg2MDYzLS40NjAwMzc3LTEwLjk0LTIuODUtMy41NzQ2Mjc1LTIuNzI5MzE1Ni01LjkxMzkxOTgtNi43NzA4OTMtNi41LTExLjIzLS42NzkxODcxLTUuMDM4MzY1NC42ODE1NTc2LTEwLjEzOTM1OCAzLjc4LTE0LjE3IDMuNDI4OTExNy00LjQ5NzM1NTMgOS4xOTIwODA1LTcuNDMzMzc0NSAxNC43OTcxNjk5LTguMTg2MTExOS01LjU2OTkyOC43ODEyMTM1LTExLjI5MDg2NDEgMy43MjI4NjUzLTE0LjY4NzE2OTkgOC4yMDYxMTE5LTMuMDYxNzA5MyA0LjAwNDg0NjEtNC40MDA1MzQ2IDkuMDY1MDI5Ni0zLjcyIDE0LjA2LjU3ODczMzMgNC40MDEzNjM0IDIuODg1MDUwNiA4LjM5MTU0NDIgNi40MSAxMS4wOSAzLjA2NjcyNjUgMi4zNDQ2MDQ5IDYuOTUwNjM0NyAzLjM1MDc0MjcgMTAuNzcgMi43OSAzLjI1Mzc4NzQtLjQ0OTI2MjMgNi4xNzc1ODI2LTIuMjIyMzU2IDguMDgtNC45IDEuNTg5MzMxNi0yLjE5MDc1MjEgMi4xNzc4MjA3LTQuOTUxNTY1NSAxLjYyLTcuNi0uNDA0MTkzNi0yLjEzMDE3My0xLjc0NDI5Ni0zLjk2NTkyOTctMy42NS01LTEuMzkwNTYzLS44MDkyODctMy40OTI4MDg0LS44MDAwOTc2LTQuOTQtLjA5NzA3MDEiIHRyYW5zZm9ybT0ibWF0cml4KC45OTQ1MjE5IC4xMDQ1Mjg0NiAtLjEwNDUyODQ2IC45OTQ1MjE5IDQuMzcyNzE2IC0zLjU1OTUyMikiLz48L2c+PC9zdmc+)](https://github.com/jorgegonzalez/zoe)
```

[MIT](/LICENSE) © [Jorge Gonzalez](https://jorgegonzalez.io)
