# git log 命令语法

`git log` 命令在 Git 中用于显示提交历史记录。它提供了多种选项来自定义输出的格式和内容。以下是 `git log` 命令的基本语法和一些常用选项的详细解释：

## 基本语法

```bash
git log [<options>]
```

## 常用选项

1. `--oneline`: 显示每个提交的简短信息，通常是提交的 SHA-1 校验和和提交消息的第一行。这使输出更紧凑，便于一次查看多个提交。
2. `--stat`: 显示每个提交的统计信息，包括哪些文件被修改以及每个文件的添加和删除行数。
3. `-n <number>` 或 `--max-count=<number>`: 限制输出的提交数量。`<number>` 是你想要查看的最近提交的数量。
4. `--graph`: 在命令行中以 ASCII 图形显示分支和合并历史。
5. `--decorate`: 显示每个提交的分支或标签引用。
6. `--pretty=format:"<format>"`: 自定义输出格式。`<format>` 可以是一系列的占位符，如 `%H`（提交哈希）、`%an`（作者名字）、`%ar`（作者相对日期）、`%s`（提交信息）等。
7. `--author="<pattern>"`: 只显示特定作者的提交。`<pattern>` 可以是字符串或正则表达式。
8. `--since=<date>`, `--after=<date>`: 只显示在特定日期之后的提交。
9. `--until=<date>`, `--before=<date>`: 只显示在特定日期之前的提交。
10. `--grep="<pattern>"`: 只显示提交信息中匹配特定模式的提交。`<pattern>` 可以是字符串或正则表达式。

## 示例

- 显示简短的提交历史：

  ```bash
  git log --oneline
  ```

- 显示最近三个提交：

  ```bash
  git log -n 3
  ```

- 显示提交统计信息：

  ```bash
  git log --stat
  ```

- 显示具有分支和合并图形的提交历史：

  ```bash
  git log --graph
  ```

- 显示特定作者的提交：

  ```bash
  git log --author="Author Name"
  ```

- 显示在特定日期后的提交：

  ```bash
  git log --since="2023-01-01"
  ```

`git log` 命令的选项非常多，可以组合使用以适应特定的需求。熟悉这些选项有助于更有效地浏览和理解项目的提交历史。