# git rebase 命令语法

`git rebase` 命令在 Git 中用于重新应用一个分支上的更改到另一个基础（或根）上。这通常用于保持一个干净、线性的项目历史。Rebase 可以改变提交历史，因此在公共分支上使用时需要谨慎。

## 基本语法

```bash
git rebase [<options>] [<upstream> [<branch>]]
```

- `[<upstream>]`: 指定你想要 rebase 到的基础（或父）分支。通常，这是一个更长久或主要的分支，如 `main` 或 `develop`。
- `[<branch>]`: 要 rebase 的分支。如果省略，Git 默认使用当前分支。

## 常用选项

1. `-i` 或 `--interactive`: 交互式 rebase，允许你在 rebase 过程中修改提交（如编辑、删除、重新排序）。
2. `--onto <newbase>`: 将 `<branch>` 上的更改从一个基础移到另一个基础（`<newbase>`）。
3. `--continue`: 在解决完冲突后继续进行 rebase。
4. `--abort`: 取消 rebase 操作，并将分支恢复到 rebase 开始之前的状态。
5. `--skip`: 跳过引起冲突的提交，并继续 rebase。
6. `--force` 或 `-f`: 强制 rebase，即使它要重新应用的更改已经存在于上游分支中。

## 示例

- 将当前分支 rebase 到`main`分支：

  ```bash
  git rebase main
  ```

- 交互式 rebase：

  ```bash
  git rebase -i HEAD~3
  ```

  这个命令会打开一个编辑器，允许你修改最近的三次提交。

- 在解决冲突后继续 rebase：

  ```bash
  git rebase --continue
  ```

- 取消 rebase 操作：

  ```bash
  git rebase --abort
  ```

## 使用注意

- Rebase 可以改变提交历史，所以在已经推送到远程仓库的分支上使用时要特别小心。
- 交互式 rebase 是一个强大的工具，可以用来清理提交历史，但也可能复杂且容易出错。
- 解决 rebase 过程中的冲突可能需要对代码和项目历史有深入的理解。
