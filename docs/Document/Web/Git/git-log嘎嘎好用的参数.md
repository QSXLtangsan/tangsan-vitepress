# git log 嘎嘎好用的参数

git 是一个广泛使用的版本控制系统，其提供了丰富的命令和参数来帮助我们查看和管理代码的历史。其中，`git log` 命令用于查看提交历史。下面我们来介绍一些常用且好用的 `git log` 参数。

## git log --oneline

`git log --oneline` 是一个非常实用的参数，它以一行的方式显示每个提交，使输出更简洁。这对于查看大量提交的项目特别有用。输出的每一行包括提交的 SHA-1 校验和和提交的标题。

bash

```bash
$ git log --oneline
```

## git log --stat

`git log --stat` 参数用于显示每次提交的统计信息，包括哪些文件被修改，每个文件的修改行数，以及每次提交的总行数。

bash

```bash
$ git log --stat
```

## git log -1

`git log -1` 参数用于显示最近的一次提交。你也可以使用 `-n` 参数显示最近的 n 次提交，比如 `git log -5` 就会显示最近的 5 次提交。

```bash
$ git log -1
```

## git log --date=short

`git log --date=short` 参数用于显示简短的日期格式。默认情况下，`git log` 会显示完整的日期和时间，但有时我们只关心日期，这时 `--date=short` 就非常有用了。

```bash
$ git log --date=short
```

## git log --date=iso

`git log --date=iso` 参数用于显示 ISO 8601 标准的日期和时间。ISO 8601 是国际标准化组织设定的日期和时间的表示方法，格式为 "YYYY-MM-DD HH:MM:SS"。与 `--date=short` 相比，`--date=iso` 提供了更详细的日期和时间信息。

这个参数在需要查看提交的精确时间，例如需要查找在特定时间进行的提交时，非常有用。使用方式如下：

```bash
$ git log --date=iso
```

执行这个命令后，你会看到类似下面的输出：

```bash
commit ea1b82ff813c2772f10aad6191ea307d45fbac6e
Author: John Doe <john.doe@example.com>
Date:   2023-06-06 12:34:56 +0800

    Add new feature
```

在这个示例中，日期和时间都以 ISO 8601 格式显示，包括年、月、日、小时、分钟和秒，以及时区信息。

总结一下，`git log --date=iso` 提供了一种详细、准确且标准的方式来查看提交的日期和时间。尽管在日常使用中它可能比 `--date=short` 或默认的日期格式更复杂，但在需要精确时间信息的场景下，它是一个很好的选择。
