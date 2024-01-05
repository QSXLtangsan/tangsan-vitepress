# git branch 命令语法

`git branch` 命令在 Git 中用于管理分支。它可以创建、列出、重命名和删除分支。以下是 `git branch` 命令的基本语法和常用选项：

### 基本语法

```bash
git branch [<options>] [<branchname>]
```

- `[<branchname>]`: 创建或操作的分支名。如果只使用 `git branch` 而不加任何选项和分支名，它将列出本地仓库的所有分支。

### 常用选项

1. `-a`: 列出所有分支（本地和远程）。
2. `-r`: 列出远程分支。
3. `-M <newbranch>` : 重命名当前分支为 `<newbranch>`，如果新分支已存在，会被覆盖。
4. `-m <oldbranch> <newbranch>`: 重命名分支。将 `<oldbranch>` 更名为 `<newbranch>`。
5. `-d <branchname>` 或 `--delete <branchname>`: 删除分支。只能删除已经合并到上游分支的分支。
6. `-D <branchname>`: 强制删除分支，即使它尚未合并。
7. `--show-current`: 显示当前分支名称。
8. `-v` 或 `-vv`: 除了分支名称外，还显示更多信息（如每个分支最后一次提交的信息）。

### 示例

- 列出所有本地分支：

  ```bash
  git branch
  ```

- 列出所有分支（包括远程分支）：

  ```bash
  git branch -a
  ```

- 创建一个新分支：

  ```bash
  git branch new-branch
  ```

- 重命名当前分支：

  ```bash
  git branch -M new-branch
  ```

- 重命名特定分支：

  ```bash
  git branch -m old-branch new-branch
  ```

- 删除分支：

  ```bash
  git branch -d branch-to-delete
  ```

- 强制删除尚未合并的分支：

  ```bash
  git branch -D branch-to-delete
  ```

### 注意事项

- 使用 `git branch` 创建分支时，新分支不会自动切换为当前分支。你需要使用 `git checkout <branchname>` 或新的 `git switch <branchname>` 命令来切换分支。
- 使用 `git branch -M` 来重命名当前分支时，请确保你了解这将覆盖同名的现有分
- 删除分支之前，请确保你不再需要该分支上的更改，尤其是使用 `-D` 强制删除未合并分支时。
- `git branch` 不会与远程仓库交互。要删除远程分支，你需要使用 `git push <remote> --delete <branchname>`。
