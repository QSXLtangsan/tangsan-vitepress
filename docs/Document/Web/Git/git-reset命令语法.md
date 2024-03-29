# git reset 命令语法

`git reset` 命令在 Git 中用于撤销更改，它能重置当前 HEAD 到指定状态。根据使用的选项，`git reset` 可以影响暂存区和工作目录，并且可以用于改变提交历史。这个命令有三种主要模式：软重置（`--soft`）、混合重置（默认）和硬重置（`--hard`）。

## 基本语法

```bash
git reset [<mode>] [<commit>]
```

- `[<mode>]`: 选择重置模式。包括 `--soft`、`--mixed`（默认）、`--hard`、`--merge` 和 `--keep`。
- `[<commit>]`: 指定要重置到的提交。如果省略，Git 默认使用 `HEAD`。

## 重置模式

1. `--soft`: 重置 HEAD 到另一个提交，但不改变暂存区和工作目录。可以用来撤销提交但保留更改内容。
2. `--mixed`（默认）: 重置 HEAD 到另一个提交，并更新暂存区以匹配该提交，但保留工作目录不变。这是默认模式。
3. `--hard`: 完全重置 HEAD、暂存区和工作目录到另一个提交。这将放弃所有未提交的更改。
4. `--merge`: 与 `--hard` 类似，但保留本地更改。
5. `--keep`: 重置 HEAD 到另一个提交，但保持工作目录和暂存区不变，尝试防止未提交的本地更改被覆盖。

## 示例

- 将 HEAD 重置到上一次提交（保留工作目录更改）：

  ```bash
  git reset HEAD^
  ```

- 撤销上一次提交（保留更改并准备重新提交）：

  ```bash
  git reset --soft HEAD^
  ```

- 完全撤销上一次提交和更改：

  ```bash
  git reset --hard HEAD^
  ```

## 注意事项

- 在使用 `git reset` 时要特别小心，特别是 `--hard` 选项，因为它会永久删除未提交的更改。
- 如果你在公共分支上使用 `git reset` 并推送到远程仓库，这可能会对其他协作者造成影响。在这种情况下，更合适的做法可能是使用 `git revert` 来创建一个新提交，该提交撤销之前的更改，而不是重写历史。
