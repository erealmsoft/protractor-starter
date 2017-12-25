## 准备知识
### 熟悉：
* Javascript：[在线教程](http://www.w3school.com.cn/js/) 学习JS教程，JS对象两个部分即可。
* [JSON](https://baike.baidu.com/item/JSON)
* 代码编辑器：推荐 Webstorm，VSCode，Sublime任意一个
* [Selenium WebDriver](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)
* HTTP协议：[中文教程](http://www.ruanyifeng.com/blog/2016/08/http.html)
* jasmine: [英文官网](https://jasmine.github.io/index.html) [中文](https://www.ibm.com/developerworks/cn/web/1404_changwz_jasmine/index.html)
* protractor：[英文官网](http://www.protractortest.org) 
* [WebDriverManager](https://github.com/bonigarcia/webdrivermanager)
* 快速了解protractor的一个[教程](http://objectpartners.github.io/angular-training/lectures/lecture-11.html) 

### 了解：
* 各浏览器控制台工具
* [gulp](https://gulpjs.com/)

## 安装
* [Node.js](https://nodejs.org/en/)
* [JAVA](https://www.java.com/en/download) 及JDK（确保JDK安装）

## 搭建开发环境
* `npm i -g gulp gulp-cli` 使用命令安装gulp
* `npm i` 按照项目依赖
* `gulp webdriver_update` 更新selenium相关依赖
* 如果需要启动本地 selenium server， 运行`gulp webdriver_standalone`。同时修改protractor.conf.js 添加 本地server配置 `seleniumAddress: 'http://localhost:4444/wd/hub'`
* 如果不需要启动selenium server，或者希望直接连接browser driver。可以设置直连。`directConnect: true`
* `gulp` 使用gulp命令启动项目
* `gulp lint` 检查测试代码规范
* 测试报告及测试截图位置：`/report/test-report.html` 和 `/report/screenshots`

## 测试用例编写
### Jasmine测试框架API
* [英文官方](https://jasmine.github.io/api/2.8/global)
* [中文教程](https://yq.aliyun.com/articles/53426)
### Protractor测试框架API
* [英文官方](http://www.protractortest.org/#/api)

### 代码风格及最佳实践
* [Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)

### 项目目录结构说明
* node_modules: 项目依赖的node包文件夹，运行`npm i`后自动生成的系统文件夹
* report：报告生成的路径，包含测试运行截图及HTML格式的报告。文件夹名称可以更换，具体配置在protractor.config.js的HtmlScreenshotReporter配置里面。本项目配置的是`dest: 'report/screenshots'`
* tests：测试用例文件夹，包含了项目里面所有的测试用例。文件夹名称可以更换，具体配置在protractor.config.js的specs属性里面。本项目配置的是`specs: ['tests/*.js']`
* .eslintrc.js: eslint的配置文件。eslint用于检查js代码的语法格式与规范。eslint的配置在gulpfile里面。运行命令 `gulp eslint`来检查当前项目的js规范。和测试本身关系不大。
* .gitignore: git仓库的配置文件，用于表明那些文件或者文件夹不上传到git仓库中。比如本项目中的`node_modules`和`report`文件夹。
* gulpfile: 辅助项目的集成工具，本项目中集成了eslint和protractor的配置和运行。gulp的作用是方便了项目的配置和运行，非必须配置。
* package.json: node项目的标准依赖配置。本项目中，配置了所有用到的node包
* package-lock.json：安装node包后，自动生成的文件。新版本node的功能，用于固定node包的版本。
* protractor.conf.js: protractor的配置文件。文件名可以更换，文件名的配置在gulpfile.js里面。本项目配置的是`configFile: 'protractor.conf.js'`
* README.md：项目说明文档，md文件一般用于markdown文档。

### 配置生成测试报告
* [PROTRACTOR-JASMINE2-HTML-REPORTER](http://www.testingbay.com/tutorials/protractor-jasmine-reporting/)

## 常见问题
* `gulp webdriver_update`或者 `gulp webdriver_standalone` 不成功，网络问题
>> 在线下载protractor npm包。修改protractor文件夹里面的路径：替换 `C:\\test\\` 为当前代码文件跟路径路径

>> 另外，可以设置代理 `set HTTP_PROXY=http://127.0.0.1:1080`，然后运行 `gulp webdriver_update` [参考文章](https://github.com/angular/protractor/pull/966)

## 其他文章推荐
* [Protractor小结](http://blog.csdn.net/wosishui21/article/details/38340527)

