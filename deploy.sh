#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 1. 生成静态文件
npm run build

# 2. 进入生成的文件夹
cd dist

# 3. 初始化 git 仓库
git init
git add -A
git commit -m 'deploy'

# 4. 推送到 github (这里已经帮你换成正确的 intro-vue-app 地址了)
git push -f https://github.com/strongxiaoyang/intro-vue-app.git master:gh-pages

# 5. 回到上级目录
cd -