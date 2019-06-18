# webpack-spa-template

这是一个使用 webpack 配置单页应用(SPA)的简易 demo，页面使用 Vue 编写，无 SEO。

## Demand

实现一个简单的应用场景：我的课程笔记(class-note)
- 【列表页】展示所有课程
- 点击单个课程进入该课程详情页
- 【详情页】展示课程大纲和笔记内容

接口：
- 获取课程：http://imoocnote.calfnote.com/inter/getClasses.php?curPage=1
- 获取课程大纲：http://imoocnote.calfnote.com/inter/getClassChapter.php?cid=1
- 获取笔记内容：http://imoocnote.calfnote.com/inter/getClassNote.php?cid=1

## Framework

主要框架和库的版本：

Node.js 10.x | webpack 4.x | babel 7.x | babel-loader 8.x | vue 2.x

Vue 生态：vue + vuex + vue-router + axios + Vant

## Usage

```bash
# install dependencies
$ npm install

# dev
$ npm run dev

# build for development
$ npm run build:dev

# build for production
$ npm run build:prod

# analyse
$ npm run analyse
```

## Q&A

使用图片等静态资源：
- 在 HTML `template` 中：`<img alt="cup" src="@/assets/images/cup.png">`
- 在 CSS `style` 中：`background-image: url('../assets/images/cup.png');`
- 在 JS `script` 中：`const cup = require('@/assets/images/cup.png')`
