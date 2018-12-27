# Zoe

*Under Construction*

## Features

- **No configuration necessary**. Just install Zoe and you're ready to go.
- Defaults to **[Prettier](https://github.com/prettier/prettier)** for formatting rules and **[eslint-config-airbnb](https://github.com/airbnb/javascript/)** for code-quality rules (with a few rules turned off). Check out the **[eslint-config-zoe](https://github.com/jorgegonzalez/eslint-config-zoe)** package for included rules and plugins.
- Out-of-the-box support for **React**, **TypeScript**, and **Jest**. No need to manually install any additional plugins or configs.
- Fix issues by running `zoe --fix`.
- Includes [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) and [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) for some additional goodies.

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/12901172?v=4" width="100px;"/><br /><sub><b>Jorge Gonzalez</b></sub>](https://jorgegonzalez.io)<br />[🐛](https://github.com/jorgegonzalez/zoe/issues?q=author%3Ajorgegonzalez "Bug reports") [💻](https://github.com/jorgegonzalez/zoe/commits?author=jorgegonzalez "Code") [🎨](#design-jorgegonzalez "Design") [📖](https://github.com/jorgegonzalez/zoe/commits?author=jorgegonzalez "Documentation") [💡](#example-jorgegonzalez "Examples") [🤔](#ideas-jorgegonzalez "Ideas, Planning, & Feedback") [🚇](#infra-jorgegonzalez "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-jorgegonzalez "Packaging/porting to new platform") [🔌](#plugin-jorgegonzalez "Plugin/utility libraries") [💬](#question-jorgegonzalez "Answering Questions") [👀](#review-jorgegonzalez "Reviewed Pull Requests") [⚠️](https://github.com/jorgegonzalez/zoe/commits?author=jorgegonzalez "Tests") | [<img src="https://avatars2.githubusercontent.com/u/6123841?v=4" width="100px;"/><br /><sub><b>Anton Zdanov</b></sub>](https://azdanov.js.org/)<br />[🐛](https://github.com/jorgegonzalez/zoe/issues?q=author%3Aazdanov "Bug reports") [💻](https://github.com/jorgegonzalez/zoe/commits?author=azdanov "Code") [📖](https://github.com/jorgegonzalez/zoe/commits?author=azdanov "Documentation") [🤔](#ideas-azdanov "Ideas, Planning, & Feedback") [🔌](#plugin-azdanov "Plugin/utility libraries") [👀](#review-azdanov "Reviewed Pull Requests") [⚠️](https://github.com/jorgegonzalez/zoe/commits?author=azdanov "Tests") [🔧](#tool-azdanov "Tools") | [<img src="https://avatars0.githubusercontent.com/u/3644972?v=4" width="100px;"/><br /><sub><b>John Mars</b></sub>](http://M4R5.io)<br />[📖](https://github.com/jorgegonzalez/zoe/commits?author=j0hnm4r5 "Documentation") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT](/LICENSE) © [Jorge Gonzalez](https://jorgegonzalez.io)
