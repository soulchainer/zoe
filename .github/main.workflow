workflow "Build on push" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "aquariuslt/github-actions-yarn@master"
  runs = "yarn"
  args = "install"
}

action "Build" {
  uses = "aquariuslt/github-actions-yarn@master"
  needs = ["Install"]
  args = "build"
  runs = "yarn"
}
