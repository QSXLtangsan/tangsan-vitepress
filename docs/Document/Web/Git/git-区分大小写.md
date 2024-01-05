# 起步 - 如何设置 Git 以区分文件名大小写

在 Git 中，要配置 Git 以便不忽略文件大小写，你需要设置 `core.ignorecase` 选项为 `false`。这个设置告诉 Git 区分文件名的大小写。在大多数 Unix-like 系统（如 Linux 和 macOS）上，文件系统是区分大小写的，但在 Windows 上默认不是。要进行这项配置，请按照以下步骤操作：

1. 打开终端或命令提示符。

2. 切换到你的 Git 仓库目录。

   ```bash
   cd /path/to/your/repository
   ```
   
3. 执行以下命令来设置 `core.ignorecase` 为 `false`：

   ```bash
   git config core.ignorecase false
   ```

这将在你的 Git 仓库中进行局部设置。如果你想要对所有的 Git 仓库进行这项设置，可以添加 `--global` 标志，如下所示：

```bash
git config --global core.ignorecase false
```

请注意，更改这个设置可能会导致一些与现有文件重名（仅大小写不同）的文件出现冲突，所以在更改此设置后要小心处理这些情况。此外，如果你的文件系统本身不区分大小写（如在某些 Windows 配置中），即使 Git 配置为区分大小写，文件系统本身的限制依然可能导致问题。
