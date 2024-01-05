# git clone 拉取代码

## 拷贝地址

克隆/下载 - SSH - 复制

[git@gitee.com](mailto:git@gitee.com):fe521/sso-app.git

## 使用 git clone 拉取代码

```bash
git clone git@gitee.com:fe521/sso-app.git
```

## git clone 语法介绍

`git clone` 命令是 Git 版本控制系统中用于克隆（即复制）一个现有 Git 仓库的命令。这里是它的基本语法和一些常用选项的介绍：

### 基本语法

```bash
git clone <repository-url> [<directory>]
```

- `<repository-url>`: 要克隆的仓库的 URL。这可以是 HTTPS 或 SSH 格式的 URL，也可以是本地文件系统上的路径。
- `[<directory>]`: 可选参数，用于指定克隆仓库的本地目录名。如果不提供此参数，Git 将使用仓库名称作为目录名。

### 常用选项

1. `--branch <branch-name>` 或 `-b <branch-name>`: 克隆特定分支。默认情况下，Git 会克隆远程仓库的默认分支。
2. `--depth <depth>`: 创建一个浅克隆，即只克隆最近的 `<depth>` 个提交。这对于大型仓库很有用，可以减少下载的数据量。
3. `--recursive`: 递归地克隆子模块。如果仓库包含子模块，这个选项会克隆它们。
4. `--single-branch`: 只克隆指定的分支，而不是所有分支。这可以减少克隆操作的数据量。

### 示例

- 克隆一个仓库到默认目录：

  ```bash
  git clone https://github.com/example/repo.git
  ```

- 克隆一个仓库到指定目录：

  ```bash
  git clone https://github.com/example/repo.git my_directory
  ```

- 克隆特定分支：

  ```bash
  git clone -b branch-name https://github.com/example/repo.git
  ```

- 创建浅克隆：

  ```bash
  git clone --depth 1 https://github.com/example/repo.git
  ```

这些是 `git clone` 命令的基本用法和一些常见选项。Git 是一个功能丰富的工具，有许多高级选项和用法，可以根据需要进行探索和学习。
