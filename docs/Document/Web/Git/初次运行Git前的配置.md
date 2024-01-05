# 起步 - 初次运行 Git 前的配置

## 官网教程

1. 访问 git 官网

https://git-scm.com/

1. 点击 Documentation - Book - 简体中文

https://git-scm.com/book/zh/v2

1. 找到`1.6 初次运行 Git 前的配置` - 点击进来

https://git-scm.com/book/zh/v2/起步-初次运行-Git-前的配置

## 设置 Git 用户信息

安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：

```bash
git config --global user.name "zhongyi.li"
```

```bash
git config --global user.email zhongyi.li@qq.com
```

再次强调，如果使用了 --global 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 --global 选项的命令来配置。

## 如何在 Git 中删除全局 user.name 和 user.email 配置

要在 Git 中删除全局设置的 `user.name` 和 `user.email` 配置，您可以分别使用以下两条命令：

1. 删除 `user.name`：

   ```bash
   git config --global --unset user.name
   ```

   这条命令会从您的全局 Git 配置中移除 `user.name` 设置。

2. 删除 `user.email`：

   ```bash
   git config --global --unset user.email
   ```

   这条命令会从您的全局 Git 配置中移除 `user.email` 设置。

执行这些命令后，如果您想验证这些设置是否被正确删除，可以使用以下命令查看所有全局配置：

```bash
git config --global --list
```

这将列出所有的全局 Git 配置项，您可以确认 `user.name` 和 `user.email` 设置是否已被正确移除。
