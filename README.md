# OriginBot智能机器人开源套件文档仓库


## 网站框架
- mkdocs：https://markdown-docs-zh.readthedocs.io/zh_CN/latest/
- 主题：https://squidfunk.github.io/mkdocs-material/



## 环境配置

- 安装Python：https://www.python.org/

- 安装pip：

```bash
pip install --upgrade pip
```

- 安装MkDocs

```bash
pip install mkdocs
```

- 安装依赖

```bash
pip install mkdocs-material mkdocs-static-i18n
```



## 本地运行

```bash
mkdocs serve
```

浏览器访问：127.0.0.1



## 静态页面编译

```bash
mkdocs build
```


# 使用 uv
[uv install](https://docs.astral.sh/uv/getting-started/installation/)
```bash
# 安装
curl -LsSf https://astral.sh/uv/install.sh | sh
# 获取环境和依赖
uv sync
# 运行文档服务
uv run mkdocs serve
```