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

- 安装

```bash
pip install mkdocs-material
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
```bash
# 创建虚拟环境
uv venv
# 安装依赖
uv pip install -r requirements.txt
# 运行文档服务
uv run mkdocs serve
```