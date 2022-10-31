# 初始化React项目

## js
```
npx create-react-app <项目名>
```

## ts
```
npx create-react-app <项目名> --template typescript
```

# react-app-rewired customize-cra来完成配置的扩展

## 一、为啥不建议执行eject

#### 1.执行eject产生了什么变化？

create-react-app框架本身将webpack、babel的相关配置封装在了react-scripts中，执行yarneject后，会将webpack、babel等配置暴露在config目录下，同时scripts目录下会有新的命令文件更新，package.json文件中scripts命令同步更新。

#### 2.执行eject带来了什么问题？

首先，执行eject是不可逆的，复杂的webpack等配置由框架本身转交给用户自己进行维护了。

其次，在版本迭代时，如果更新了react、react-scripts、eslint、tsconfig等依赖，有可能会引起版本依赖的问题，即使我们按错误信息修复了之后，项目还是无法运行。

所以我们一般不太建议使用yarn eject的方式暴露create-react-app框架的配置。

## 二、有需求咋解决

实际开发中，我们还是需要更新webpack、babel的配置，比如：

antd的按需加载；

配置css预处理器-less；

设置alias、externals；

生产环境打包-去除console.log、debugger；

打包结果优化分析；

打包增加进度条提示；

前方高能预警~

yarn add react-app-rewired customize-cra来完成配置的扩展~

这里划重点，记住要考呦~

我们划分几个步骤，来一一实现：

#### 1、下载安装依赖

**yarn add react-app-rewired customize-cra -D**

一般现在使用的版本是react-app-rewired@^2.1.8、customize-cra@^1.0.0

配置package.json的命令

```
"scripts": {

\-   "start": "react-scripts start",

\+   "start": "react-app-rewired start",

\-   "build": "react-scripts build",

\+   "build": "react-app-rewired build",

}
```

在根目录下配置config-overrides.js文件

```
module.exports = {}
```

完成了基础配置后，我们在config-overrides.js中进行详细配置，解决我们上面的需求问题。

#### 2、antd的按需加载

安装依赖: **yarn add antd -D**

配置

```
cosnt { override, fixBabelImports } = require('customize-cra');

module.exports = override(

​    fixBabelImports(

​    "import",

​    {

​      "libraryName": "antd",

​      "libraryDirectory": "es",

​      "style": "css"

​    }

  )

)
```

#### 3、配置css预处理器-less

为啥在这里只强调了less呢，因为create-react-app中内置了sass/scss的预处理器，只需要使用时安装相关的依赖就可以了（运行时，根据提示缺失的包进行安装即可）。

yarn add sass -D

接下来我们来less的是如何支持的

安装依赖：

**yarn add less less-loader@7.3.0 -D**

注意这里less-loader的版本less-loader@7.3.0，如果是最新的版本和上面的react-app-rewired和customize-cra版本配合配置时有问题，所以使用了低版本的。

less-loader的最新版本其实是为了配合webpack@5.0使用的。

配置

```
const { override, addLessLoader } = require('customize-cra');

module.exports = override(

addLessLoader({

// 这里可以添加less的其他配置

lessOptions: {

​    // 根据自己需要配置即可~

​    }

})

);
```

#### **4、设置alias、externals；**

```
const { override, addWebpackAlias } = require('customize-cra');

const path = require('path');

module.exports = override(

  // alias

addWebpackAlias({

​    // 加载模块的时候，可以使用“@”符号来进行简写啦~

​    '@': path.resolve(__dirname, './src/')

  }),

  // externals

  addWebpackExternals({

​    // 注意对应的在public/index.html引入jquery的远程文件地址

​    "jQuery": "jQuery"

  })

)
```

#### 5、生产环境打包-去除console.log、debugger；

安装依赖

**yarn add terser-webpack-plugin -D**

配置

```
const { override, addWebpackPlugin } = require('customize-cra');

const TerserPlugin = require('terser-webpack-plugin'); // 对js进行压缩

module.exports = override(

​    // 注意是production环境启动该plugin

​    process.env.NODE_ENV === 'production' && addWebpackPlugin(

​        new TerserPlugin({
					terserOptions: {
						// https://github.com/terser/terser#minify-options
						compress: {
							warnings: false, // 删除无用代码时是否给出警告
							drop_debugger: true, // 删除所有的debugger
							drop_console: true, // 删除所有的console.*
							pure_funcs: ['']
							// pure_funcs: ['console.log'], // 删除所有的console.log
						}
					}
				})

)
```

#### 6、打包结果优化分析

安装依赖

**yarn add webpack-bundle-analyzer cross-env -D**

cross-env用于配置环境变量

配置

// package.json文件

```
"scripts": { "build:analyzer": "cross-env ANALYZER=true react-app-rewired build" }

// config-overrides.js

const { override, addWebpackPlugin } = require('customize-cra');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = override(

  // 判断环境变量ANALYZER参数的值

​    process.env.ANALYZER && addWebpackPlugin(new BundleAnalyzerPlugin())

)
```

#### 7、打包增加进度条提示

安装依赖

**yarn add progress-bar-webpack-plugin -D**

```
const { override, addWebpackPlugin } = require('customize-cra');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = override(

​    addWebpackPlugin(new ProgressBarPlugin())

)
```

#### 8、安装babel-plugin-import, babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件，现在我们尝试安装它并修改 config-overrides.js 文件。

```
yarn add babel-plugin-import -D

const { fixBabelImports } = require('customize-cra');

fixBabelImports('import', {

​            //配置按需加载

​            libraryName: 'antd',

​            libraryDirectory: 'es',

​            style: true

​        }),
```

**这里有个问题postcss**

```
adjustStyleLoaders(({ use: [, , postcss] }) => {

​    const postcssOptions = postcss.options;

​    postcss.options = { postcssOptions };

}),
```

以上就是我们实现几个需求的配置。


# 添加提交校验

## 添加 `husky`

-   [husky 官方文档](https://typicode.github.io/husky/#/)

1. 安装 `husky` 并启用 `git hooks`

```
npx husky add .husky/pre-commit "npm run lint"
```

2. 修改 `package.json` 文件

```
// package.json
{
    scripts: {
        ...,
        "lint": "eslint . --ext .js,.ts,.tsx src --ignore-path .gitignore",
        "prepare": "husky install"
    },
}
```

3. 添加 `commit` 提交内容规范 `git hooks`

```
npx husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

4. 添加 `commitlint.config.js` 及相关依赖

```
// 依赖
yarn add @commitlint/cli @commitlint/config-conventional -D
// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
        ],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
    },
};
// commit 的内容，只允许使用下面7个标识。
// feat: 新功能
// fix: 修补bug
// docs: 文档（documentation）
// style: 样式/格式（不影响代码运行的变动）
// refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
// test: 增加测试
// chore: 构建过程或辅助工具的变动
```

## 添加 `lint-staged`

-   [lint-staged 官方文档](https://www.npmjs.com/package/lint-staged)
-   `lint-staged` 在我们提交代码时，只会对修改的文件进行检查、修复处理，以保证提交的代码没有语法错误，不会影响其他伙伴在更新代码无法运行的问题。

1. 安装

```
yarn add lint-staged -D
```

2. 添加 `.lintstagedrc` 配置文件及依赖

-   [stylelint 规则文档](https://stylelint.io/user-guide/usage/cli)

```
// 依赖
yarn add husky -D
yarn add -D stylelint stylelint-config-standard
// .lintstagedrc
{
  "*.{js,ts,tsx}": ["npm run lint"],
  "*.{css,less}": ["stylelint --fix"]
}
```

3. 修改 `pre-commit` 文件

```
// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
- npm run lint
+ yarn lint-staged --allow-empty "$1"
```