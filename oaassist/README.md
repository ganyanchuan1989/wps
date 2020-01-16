## Welcome to WPS OAAssist Demo

### 这个项目是什么？

这个工程主要提供常见的OA助手的场景示例来演示网页端启动WPS客户端并和WPS加载项交互WPS API的功能，方便大家能够快速理解并熟悉WPS加载项机制以及和浏览器调用交互的流程。

### 工程结构

* demo.html 	包含了本地是否安装了正确的wps安装包、是否启动了本地服务端等的环境检测。
* server 	包含了一些前端文件和演示场景的模板文件，为网页端场景代码, 此外有几个场景需要服务端的支持，用nodejs写了一个本地服务程序用于模拟服务端场景。
* EtOAAssist	WPS 表格组件的OA助手WPS加载项，提供简单的OA场景功能示例。
* WppOAAssist	WPS 演示组件的OA助手WPS加载项，提供简单的OA场景功能示例。
* WpsOAAssist	WPS 文字组件的OA助手WPS加载项，提供常见的OA场景功能示例。

### 注意事项

* 本工程只是演示demo
* 我们建议您修改示例代码结合具体的应用场景部署到服务器上面，这样更能够体现OA助手集成的应用场景
* 为了保护代码，建议代码上线前进行混淆
* 使用该工程的时候，必须要安装WPS专业版，请咨询QQ：3253920855

### 使用此demo的步骤(以windows平台wps为例):
1. 安装wps2019企业版安装包。
2. 确保安装了[nodejs](https://nodejs.org/zh-cn/)。
3. 打开命令行（**使用管理员权限**,），cd到server目录，执行“npm install”, 用于安装相关依赖包。
4. 执行命令“node StartupServer.js”, 用于启动本地服务端程序。
5. 浏览器打开demo.html, 开始体验相关流程。

