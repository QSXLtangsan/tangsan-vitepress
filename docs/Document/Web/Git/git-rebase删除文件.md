# 使用 git rebase 删除历史记录的某个文件

## 通过 git stats 查看到对应的提交信息

我希望这次提交的 examples/video-server/public/hello.mov 文件删掉，并且不要提交到远程

```bash
commit 3653bb49f970527456ded21c53520406f1fdda4c
Author: xxxx <xxx@qq.com>
Date:   Thu Sep 21 03:16:04 2023 +0800

    feat: 支持视频预览

 examples/video-server/index.js                               |  10 ++++
 examples/video-server/package.json                           |  16 ++++++
 examples/video-server/public/file_example_AVI_1920_2_3MG.avi | Bin 0 -> 2279794 bytes
 examples/video-server/public/file_example_AVI_480_750kB.avi  | Bin 0 -> 742478 bytes
 examples/video-server/public/file_example_AVI_640_800kB.avi  | Bin 0 -> 829208 bytes
 examples/video-server/public/hello.mov                       | Bin 0 -> 184832311 bytes
 public/viewer.html                                           |  29 ++++++++++
 src/main/background.js                                       |  94 +++++++-----------------------
 src/main/ffmpeg/index.js                                     |  13 +++--
```

## 想要删除`examples/video-server/public/hello.mov`这个文件，但不影响其他的更改。我们将使用交互式 rebase 来实现这一目的

按照以下步骤来操作：

1. **启动交互式 rebase**:

   由于你已经给出了具体的 commit hash，我们可以直接基于这个 hash 进行 rebase：

   ```bash
   git rebase -i 3653bb49f970527456ded21c53520406f1fdda4c^
   ```

   这个命令中的`^`用于选择给定 commit 的父 commit。这样在交互式 rebase 中，你就可以看到你想要修改的那个 commit。

2. **在 rebase 的列表中编辑指定的提交**:

   在打开的编辑器中，找到 commit hash 为`3653bb49f970527456ded21c53520406f1fdda4c`的行。将该行开始的`pick`更改为`edit`。

3. **保存并退出编辑器**:

   这将会让 Git 停止在那个提交，并允许你进行更改。

4. **删除文件并修改提交**:

   使用以下命令从 Git 中删除该文件：

   ```bash
   git rm examples/video-server/public/hello.mov
   ```

   接着，使用下面的命令来修改这次的提交：

   ```bash
   git commit --amend
   ```

   如果你不想修改提交信息，只需保存并退出编辑器。

5. **继续 rebase**:

   ```bash
   git rebase --continue
   ```

这样，你已经成功地从指定的提交中删除了`examples/video-server/public/hello.mov`文件。现在，你可以安全地将更改推送到远程仓库。

但是，请注意，如果在之后的提交中再次引入或修改了这个文件，你需要确保这些更改也是你想要的。如果不是，你可能需要进一步处理这些提交。

1. **当执行命令看到下面消息就是成功的**

```bash
shaohai.li@192 electron-ffmpeg % git rebase --continue

Successfully rebased and updated refs/heads/main.
shaohai.li@192 electron-ffmpeg %
```
