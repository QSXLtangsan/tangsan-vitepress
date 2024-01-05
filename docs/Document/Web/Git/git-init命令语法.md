# git init 命令语法

`git init` 命令在 Git 版本控制系统中用于初始化一个新的 Git 仓库。这是创建新项目或将现有项目转换为 Git 仓库的第一步。以下是 `git init` 命令的基本语法：

## 基本语法

```bash
git init [<directory>]
```

- `[<directory>]`: 可选参数，指定要初始化为 Git 仓库的目录。如果不指定目录，`git init` 会在当前目录下初始化仓库。

## 常用选项

1. `--bare`: 创建一个裸仓库。裸仓库不包含工作目录，通常用于远程仓库。
2. `--template=<template-directory>`: 指定一个模板目录，该目录下的所有文件和目录都会被复制到新的 Git 仓库中的 `.git` 目录。
3. `--shared[=<permissions>]`: 用于多用户环境，设置仓库的共享权限。

## 示例

- 在当前目录初始化一个新的 Git 仓库：

  ```bash
  git init
  ```

- 在指定目录初始化一个新的 Git 仓库：

  ```bash
  git init /path/to/new/repo
  ```

- 创建一个裸仓库：

  ```bash
  git init --bare /path/to/bare/repo.git
  ```

运行 `git init` 后，Git 会在指定目录中创建一个新的子目录 `.git`，其中包含所有必需的仓库文件，但该目录本身还没有任何项目文件。对于已存在的项目，你需要使用 `git add` 将文件添加到仓库中，然后使用 `git commit` 进行首次提交。

`git init` 是创建新 Git 仓库或将现有项目转换为 Git 仓库的起点，它是设置 Git 项目的基础步骤。
