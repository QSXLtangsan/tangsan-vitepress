# git show 命令语法

`git show` 命令在 Git 中用于显示各种类型的对象（如提交、标签、树等）的详细信息。默认情况下，`git show` 显示 HEAD 提交的信息，包括该提交的完整补丁、作者、日期等。

## 基本语法

```bash
git show [<options>] [<object>]
```

- `[<object>]`: 指定要显示的对象，如提交哈希、标签名等。如果省略，Git 默认显示当前 HEAD 提交的信息。

## 常用选项

1. `--stat`: 显示每次提交的文件修改统计信息。
2. `--name-only`: 仅显示更改的文件名。
3. `--name-status`: 显示更改的文件名及其修改类型（如添加、修改、删除）。
4. `--oneline`: 显示每次提交的简短信息。
5. `--pretty=<format>`: 指定输出格式。`<format>` 可以是 `oneline`、`short`、`full`、`fuller` 等。
6. `--abbrev-commit`: 显示缩短的提交哈希。
7. `-p` 或 `--patch`: 显示每次提交的完整补丁。
8. `<commit-hash>`: 显示特定提交的详细信息。

## 示例

- 显示当前 HEAD 提交的详细信息：

  ```bash
  git show
  ```

- 显示特定提交的详细信息：

  ```bash
  git show 1a2b3c4d
  ```

- 以补丁形式显示特定提交的更改：

  ```bash
  git show -p 1a2b3c4d
  ```

- 显示特定提交的统计信息：

  ```bash
  git show --stat 1a2b3c4d
  ```

- 显示特定标签的信息：

  ```bash
  git show v1.0.0
  ```

## 注意事项

- `git show` 是一个非常强大的命令，可以用来检查历史提交、标签、分支等的详细信息。
- 通过使用不同的选项，你可以自定义显示的信息量和类型，以便更好地了解代码的历史更改。
- `git show` 默认显示的是补丁信息，这对于代码审查和理解历史更改非常有用。
