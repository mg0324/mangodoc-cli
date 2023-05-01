# mangodoc-cli
实现mangodoc的脚手架工具。

## 快速开始
> 本工具基于node平台，且发布到npm公共仓库。
1. 安装mangodoc-cli和http-server
``` shell
npm install -g mangodoc-cli
npm install -g http-server
```
2. 从模板初始化
``` shell
mkdir test # 修改为自己的项目名，如test
cd test # 进入到项目下
mangodoc init # 初始化，执行完后会下载模板仓库内容到当前文件夹下
```
3. 调整文档标题和内容后，启动服务
``` shell
http-server
```
4. 访问服务`http://localhost:8080/`


## 参考
* [参考博客](https://juejin.cn/post/7097186410880335886)
* [commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
* [download-git-repo](https://gitlab.com/flippidippi/download-git-repo)
* [进度条显示](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)