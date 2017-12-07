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
* [JAVA](https://www.java.com/en/download)

## 搭建开发环境
* `npm i -g gulp gulp-cli` 使用命令安装gulp
* `npm i` 按照项目依赖
* `gulp webdriver_update` 更新selenium相关依赖
* `gulp` 使用gulp命令启动项目
* `gulp lint` 检查测试代码规范

## 测试用例编写
### Jasmine测试框架API
* [英文官方](https://jasmine.github.io/api/2.8/global)
* [中文教程](https://yq.aliyun.com/articles/53426)
### Protractor测试框架API
* [英文官方](http://www.protractortest.org/#/api)

### 代码风格及最佳实践
* [Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)

## 常见问题
* `gulp webdriver_update` 不成功，网络问题
>> 在线下载protractor npm包。修改protractor文件夹里面的路径：替换 `C:\\test\\` 为当前代码文件跟路径路径



